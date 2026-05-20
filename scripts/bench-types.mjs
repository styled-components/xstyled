#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Measure how expensive xstyled's types are for TypeScript to check.
 *
 * Generates synthetic theme files of varying sizes (color/space token counts
 * mirroring real-world themes), runs `tsc --noEmit --extendedDiagnostics`
 * against each, and reports Identifiers / Symbols / Types / Instantiations /
 * Check time / Memory used as a small table.
 *
 * Use it as a regression watchdog: numbers should move locally as you change
 * generic types, and a 2x jump in Instantiations is a smell.
 *
 *   node scripts/bench-types.mjs           # runs the default 50/200/500 mix
 *   node scripts/bench-types.mjs --sizes 100,1000
 */

import { spawnSync } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')
// On Windows the yarn bin shim is `tsc.cmd`; spawnSync needs the exact name.
const tscBin = join(
  repoRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'tsc.cmd' : 'tsc',
)

const usage = (msg) => {
  if (msg) console.error(`error: ${msg}`)
  console.error(
    'usage: node scripts/bench-types.mjs [--sizes <n,n,...>]\n' +
      '       --sizes  comma-separated list of token counts (default: 50,200,500)',
  )
  process.exit(msg ? 2 : 0)
}

const arg = (name, fallback) => {
  const i = process.argv.indexOf(name)
  if (i < 0) return fallback
  const next = process.argv[i + 1]
  if (next === undefined || next.startsWith('--')) {
    usage(`missing value for ${name}`)
  }
  return next
}

if (process.argv.includes('--help') || process.argv.includes('-h')) usage()

const sizesArg = arg('--sizes', '50,200,500')
const sizes = sizesArg
  .split(',')
  .map((s) => parseInt(s.trim(), 10))
  .filter(Number.isFinite)
if (sizes.length === 0) usage(`--sizes received no valid integers: "${sizesArg}"`)

const fixturesRoot = mkdtempSync(join(tmpdir(), 'xstyled-typebench-'))

const buildTheme = (n) => {
  const colors = []
  for (let i = 0; i < n; i++) colors.push(`  'c${i}': '#000000'`)
  return `{
  colors: {
${colors.join(',\n')}
  },
  space: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  screens: {
    sm: 640,
    md: 768,
    lg: 1024,
  },
  states: {
    hover: '&:hover',
    focus: '&:focus',
  },
}`
}

// TS treats `C:/foo` as a bare specifier on Windows. Generate a
// `./../...` relative path from the fixture directory so the bench is
// cross-platform.
const importFrom = (fixtureDir, target) => {
  const rel = relative(fixtureDir, join(repoRoot, target)).replace(/\\/g, '/')
  return rel.startsWith('.') ? rel : `./${rel}`
}

const buildFixture = (n, fixtureDir) => `
import type { Color } from '${importFrom(
  fixtureDir,
  'packages/system/src/styles/colors',
)}'
import type { Space } from '${importFrom(
  fixtureDir,
  'packages/system/src/styles/space',
)}'
import type { SystemProp } from '${importFrom(
  fixtureDir,
  'packages/system/src/types',
)}'

interface BenchTheme ${buildTheme(n)}

type CProp = SystemProp<Color<BenchTheme>, BenchTheme>
type SProp = SystemProp<Space<BenchTheme>, BenchTheme>

declare const _c: CProp
declare const _s: SProp

const _v1: CProp = 'c0'
const _v2: CProp = { sm: 'c0', md: 'c${Math.floor(n / 2)}' }
const _v3: SProp = 'md'
const _v4: SProp = { sm: 'sm', md: 'md', lg: 'lg' }

void _c
void _s
void _v1
void _v2
void _v3
void _v4
`

const fixtureTsconfig = {
  compilerOptions: {
    strict: true,
    skipLibCheck: true,
    target: 'esnext',
    module: 'esnext',
    moduleResolution: 'node',
    esModuleInterop: true,
    noEmit: true,
    noUnusedLocals: false,
    noUnusedParameters: false,
    jsx: 'react',
    types: [],
    lib: ['esnext', 'dom'],
  },
  include: ['fixture.ts'],
}

const parseDiag = (stdout) => {
  const out = {}
  const fields = [
    ['files', /Files:\s+(\d+)/],
    ['identifiers', /Identifiers:\s+(\d+)/],
    ['symbols', /Symbols:\s+(\d+)/],
    ['types', /^Types:\s+(\d+)/m],
    ['instantiations', /Instantiations:\s+(\d+)/],
    ['memoryKB', /Memory used:\s+(\d+)K/],
    ['checkTimeSec', /Check time:\s+([\d.]+)s/],
    ['totalTimeSec', /Total time:\s+([\d.]+)s/],
  ]
  for (const [name, re] of fields) {
    const m = stdout.match(re)
    out[name] = m ? Number(m[1]) : null
  }
  return out
}

const results = []
for (const n of sizes) {
  const dir = join(fixturesRoot, `n${n}`)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'fixture.ts'), buildFixture(n, dir))
  writeFileSync(
    join(dir, 'tsconfig.json'),
    JSON.stringify(fixtureTsconfig, null, 2),
  )
  const t0 = process.hrtime.bigint()
  const proc = spawnSync(
    tscBin,
    ['--noEmit', '--extendedDiagnostics', '-p', 'tsconfig.json'],
    { cwd: dir, encoding: 'utf8' },
  )
  const wallMs = Number((process.hrtime.bigint() - t0) / 1_000_000n)
  if (proc.status !== 0) {
    if (!proc.stdout || !/Instantiations:/.test(proc.stdout)) {
      console.error(`tsc failed for n=${n}`)
      console.error(proc.stdout)
      console.error(proc.stderr)
      process.exit(1)
    }
    // tsc reported type errors but still produced diagnostics; the perf
    // numbers are valid, but the fixture isn't well-formed. Surface it so
    // a regression doesn't silently turn into a "look how fast" win.
    console.error(`warn: tsc exited ${proc.status} for n=${n}; bench numbers retained but the fixture has type errors`)
  }
  const diag = parseDiag(proc.stdout || '')
  results.push({ n, wallMs, ...diag })
}

const fmt = (v) => (v == null ? '-' : typeof v === 'number' ? v.toLocaleString() : v)
const header = [
  'tokens',
  'wall(ms)',
  'check(s)',
  'total(s)',
  'instantiations',
  'types',
  'symbols',
  'identifiers',
  'memory(KB)',
]

const rows = results.map((r) => [
  r.n,
  r.wallMs,
  r.checkTimeSec,
  r.totalTimeSec,
  r.instantiations,
  r.types,
  r.symbols,
  r.identifiers,
  r.memoryKB,
])

const widths = header.map((h, i) =>
  Math.max(h.length, ...rows.map((row) => String(fmt(row[i])).length)),
)
const pad = (s, w) => String(s).padStart(w)
console.log(header.map((h, i) => pad(h, widths[i])).join('  '))
console.log(widths.map((w) => '-'.repeat(w)).join('  '))
for (const row of rows) {
  console.log(row.map((v, i) => pad(fmt(v), widths[i])).join('  '))
}

rmSync(fixturesRoot, { recursive: true, force: true })
