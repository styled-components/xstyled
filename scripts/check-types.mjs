#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Runs every `tsconfig.types*.json` we have, one after another, with the
 * same `tsc` binary. Each project is reported with timing so a slow project
 * is easy to spot.
 *
 *   yarn check:types
 *
 * Runs every project even if one fails so all failures are visible in a
 * single CI run, then exits non-zero at the end if anything failed.
 */
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const repoRoot = join(__dirname, '..')
const tscBin = join(repoRoot, 'node_modules', '.bin', 'tsc')

// Order matters: util has no deps, system depends on util, styled-components /
// emotion depend on system.
const projects = [
  'packages/util/tsconfig.types.json',
  'packages/system/tsconfig.types.json',
  'packages/system/tsconfig.aug.json',
  'packages/styled-components/tsconfig.types.json',
  'packages/emotion/tsconfig.types.json',
]

let failed = 0
for (const rel of projects) {
  const abs = join(repoRoot, rel)
  if (!existsSync(abs)) {
    console.log(`[33mskip[0m  ${rel} (not found)`)
    continue
  }
  process.stdout.write(`check  ${rel} ... `)
  const t0 = process.hrtime.bigint()
  const proc = spawnSync(tscBin, ['-p', abs], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
  const ms = Number((process.hrtime.bigint() - t0) / 1_000_000n)
  if (proc.status === 0) {
    console.log(`[32mok[0m (${ms}ms)`)
  } else {
    console.log(`[31mFAIL[0m (${ms}ms)`)
    if (proc.stdout) console.log(proc.stdout)
    if (proc.stderr) console.error(proc.stderr)
    failed += 1
  }
}

if (failed > 0) {
  console.error(`\n${failed} type-test project(s) failed.`)
  process.exit(1)
}
console.log('\nAll type-test projects passed.')
