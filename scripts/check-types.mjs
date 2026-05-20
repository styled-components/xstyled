#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Type-checks every package: the main `tsconfig.json` (for src and test
 * files that the rollup-dts build doesn't reach) and the dedicated
 * `tsconfig.types*.json` files (for the __type-tests__ folders and the
 * system augmentation contract). Each project is reported with timing so
 * a slow one is easy to spot.
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
// On Windows the yarn bin shim is `tsc.cmd`; spawnSync needs the exact name.
const tscBin = join(
  repoRoot,
  'node_modules',
  '.bin',
  process.platform === 'win32' ? 'tsc.cmd' : 'tsc',
)

// Order matters: util has no deps, system depends on util, styled-components /
// emotion depend on system. Each package's main tsconfig.json is also
// type-checked here (with --noEmit) so test files and other src that isn't
// reachable from `src/index.ts` still gets covered — rollup-plugin-dts only
// follows imports from the entry point and skips test files, so latent
// errors there would otherwise hide indefinitely.
const projects = [
  'packages/util/tsconfig.json',
  'packages/util/tsconfig.types.json',
  'packages/prop-types/tsconfig.json',
  'packages/system/tsconfig.json',
  'packages/system/tsconfig.types.json',
  'packages/system/tsconfig.aug.json',
  'packages/core/tsconfig.json',
  'packages/styled-components/tsconfig.json',
  'packages/styled-components/tsconfig.types.json',
  'packages/emotion/tsconfig.json',
  'packages/emotion/tsconfig.types.json',
  'packages/babel-preset-emotion-css-prop/tsconfig.json',
]

// Workspace deps resolve from source via tsconfig `paths`, so no prior
// `yarn build` is required for the per-package type-checks. The one
// exception is `packages/system/tsconfig.aug.json`: that project exercises
// the *consumer* contract (`declare module '@xstyled/system'` through the
// published `dist/index.d.ts`) and therefore deliberately resolves the
// package via node_modules, not source. Skip it cleanly (no failure)
// when dist isn't built so a fresh-checkout run produces no scary noise;
// CI always builds first.
const systemDts = join(repoRoot, 'packages/system/dist/index.d.ts')
const isAug = (rel) => rel === 'packages/system/tsconfig.aug.json'

let failed = 0
for (const rel of projects) {
  const abs = join(repoRoot, rel)
  if (!existsSync(abs)) {
    // `projects` is hard-coded, so a missing tsconfig means the matrix
    // is no longer complete. Fail loudly rather than quietly skipping.
    console.log(`\x1b[31mFAIL\x1b[0m  ${rel} (not found — projects list out of sync)`)
    failed += 1
    continue
  }
  if (isAug(rel) && !existsSync(systemDts)) {
    console.log(
      `\x1b[33mskip\x1b[0m  ${rel} (run \`yarn build\` first to exercise the consumer contract)`,
    )
    continue
  }
  process.stdout.write(`check  ${rel} ... `)
  const t0 = process.hrtime.bigint()
  // Main tsconfigs don't have `noEmit` set by default (they're used for the
  // build's dts step). Pass it explicitly so we type-check without writing.
  const proc = spawnSync(tscBin, ['-p', abs, '--noEmit', '--skipLibCheck'], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
  const ms = Number((process.hrtime.bigint() - t0) / 1_000_000n)
  if (proc.status === 0) {
    console.log(`\x1b[32mok\x1b[0m (${ms}ms)`)
  } else {
    console.log(`\x1b[31mFAIL\x1b[0m (${ms}ms)`)
    if (proc.stdout) console.log(proc.stdout)
    if (proc.stderr) console.error(proc.stderr)
    failed += 1
  }
}

if (failed > 0) {
  console.error(`\n${failed} project(s) failed.`)
  process.exit(1)
}
console.log('\nAll projects passed.')
