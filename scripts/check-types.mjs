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
const tscBin = join(repoRoot, 'node_modules', '.bin', 'tsc')

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

// The augmentation contract test resolves `@xstyled/system` via the
// workspace symlink → `package.json#types` → `dist/index.d.ts`. Without a
// prior `yarn build` the import dangles and tsc reports a misleading
// "cannot find module" instead of the missing-prerequisite. Surface it.
const systemDts = join(repoRoot, 'packages/system/dist/index.d.ts')
if (!existsSync(systemDts)) {
  console.error(
    '\x1b[31merror\x1b[0m  packages/system/dist/index.d.ts is missing.\n' +
      '       run `yarn build` first; the augmentation test resolves\n' +
      '       `@xstyled/system` through the built dist.',
  )
  process.exit(1)
}

let failed = 0
for (const rel of projects) {
  const abs = join(repoRoot, rel)
  if (!existsSync(abs)) {
    console.log(`[33mskip[0m  ${rel} (not found)`)
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
    console.log(`[32mok[0m (${ms}ms)`)
  } else {
    console.log(`[31mFAIL[0m (${ms}ms)`)
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
