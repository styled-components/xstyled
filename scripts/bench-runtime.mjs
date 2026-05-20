#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Runtime perf microbenchmarks for the @xstyled/system hot paths:
 *
 *   - compose() init                (module-load cost)
 *   - flat style application        (per-render cost on a real prop bag)
 *
 * Each bench warms up, then runs many iterations and reports ns/op.
 * Numbers from a single run are noisy by a few percent; rerun and look at
 * the trend, not absolutes.
 *
 *   node scripts/bench-runtime.mjs
 */
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const xsys = require('@xstyled/system')

const measure = (label, fn, { iters = 200_000, warmup = 5_000 } = {}) => {
  for (let i = 0; i < warmup; i++) fn()
  const t0 = process.hrtime.bigint()
  for (let i = 0; i < iters; i++) fn()
  const ns = Number(process.hrtime.bigint() - t0)
  const perOp = ns / iters
  console.log(
    `${label.padEnd(40)} ${perOp.toFixed(1).padStart(10)} ns/op  ` +
      `(${iters.toLocaleString()} iters, ${(ns / 1e6).toFixed(1)} ms total)`,
  )
  return perOp
}

// -----------------------------------------------------------------------------
// compose() init: composing a big system from many pre-composed pieces.
// This is the workload that runs at module load when xstyled bundles
// build their default `system` from sub-systems (space, color, …).
// -----------------------------------------------------------------------------
const sub = {
  space: xsys.space,
  color: xsys.color,
  layout: xsys.layout,
  flexboxes: xsys.flexboxes,
  grids: xsys.grids,
  borders: xsys.borders,
  typography: xsys.typography,
  backgrounds: xsys.backgrounds,
  transitions: xsys.transitions,
  effects: xsys.effects,
}

measure(
  'compose() 10 sub-systems',
  () => xsys.compose(...Object.values(sub)),
  { iters: 50_000 },
)

measure(
  'compose() 3 leaf generators',
  () => xsys.compose(xsys.margin, xsys.padding, xsys.fontSize),
  { iters: 200_000 },
)

// -----------------------------------------------------------------------------
// Style application: a representative prop bag against `xsys.system`.
// -----------------------------------------------------------------------------
const propsTheme = {
  theme: xsys.defaultTheme,
  m: 2,
  p: { xs: 1, md: 4, lg: 8 },
  color: 'red-500',
  backgroundColor: 'blue-500',
  fontSize: 'lg',
  display: 'flex',
  alignItems: 'center',
}

measure('system(propsBag) hot prop application', () => xsys.system(propsTheme))
