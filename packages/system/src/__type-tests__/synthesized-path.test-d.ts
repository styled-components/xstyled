import type { SynthesizedPath } from '../types'
import type {
  Expect,
  Equal,
  Assignable,
  IsNever,
  NotAssignable,
} from './_helpers'

// -----------------------------------------------------------------------------
// Flat shape
// -----------------------------------------------------------------------------
type Flat = { primary: '#fff'; secondary: '#000' }

// Result is a union of the keys as string literals.
export type _flatExact = Expect<
  Equal<SynthesizedPath<Flat>, 'primary' | 'secondary'>
>

// -----------------------------------------------------------------------------
// Nested objects produce dotted paths
// -----------------------------------------------------------------------------
type Nested = {
  blue: { 50: '#a'; 100: '#b' }
  red: { default: '#c'; 500: '#d' }
}

// Each leaf produces a path; numeric leaves stringify cleanly (#413).
export type _nestedHas = Expect<
  Assignable<SynthesizedPath<Nested>, 'blue.50' | 'blue.100'>
>
export type _nestedHasDefault = Expect<
  Assignable<SynthesizedPath<Nested>, 'red.default' | 'red.500'>
>

// And the union does not silently include the bare parent keys.
export type _nestedNoBareParent = Expect<
  NotAssignable<SynthesizedPath<Nested>, 'blue'>
>

// -----------------------------------------------------------------------------
// Numeric-only keys at the root (#413 regression scenario)
// -----------------------------------------------------------------------------
type NumericRoot = { 1: '#a'; 2: '#b' }

// Numeric keys at the root should yield string-literal paths, not `never`.
export type _numericRootHas1 = Expect<
  Assignable<SynthesizedPath<NumericRoot>, '1'>
>
export type _numericRootHas2 = Expect<
  Assignable<SynthesizedPath<NumericRoot>, '2'>
>
export type _numericRootNotEmpty = Expect<
  IsNever<SynthesizedPath<NumericRoot>> extends true ? false : true
>

// -----------------------------------------------------------------------------
// Deep nesting respects a sane depth so very-deep themes do not blow up the
// instantiation counter (#429 "union type too complex to represent").
// -----------------------------------------------------------------------------
type Deep10 = {
  a: { b: { c: { d: { e: { f: { g: { h: { i: { j: 'leaf' } } } } } } } } }
}

// We only require that some path is produced (i.e. the type stays usable).
// Whether the depth guard kicks in at exactly N levels is an implementation
// detail; what matters is the result is never `never` and is assignable to
// `string`.
export type _deepUsable = Expect<Assignable<string, SynthesizedPath<Deep10>>>
export type _deepNotNever = Expect<
  IsNever<SynthesizedPath<Deep10>> extends true ? false : true
>

// -----------------------------------------------------------------------------
// Negative scenarios — the produced paths must reject arbitrary strings.
// -----------------------------------------------------------------------------

// Correct paths assign fine.
const _ok1: SynthesizedPath<Nested> = 'blue.50'
const _ok2: SynthesizedPath<Nested> = 'red.default'
void _ok1
void _ok2

// @ts-expect-error 'blue.999' is not a real path in the theme
const _bad1: SynthesizedPath<Nested> = 'blue.999'
// @ts-expect-error typo
const _bad2: SynthesizedPath<Nested> = 'bleu.50'
// @ts-expect-error bare parent is not a leaf path
const _bad3: SynthesizedPath<Nested> = 'blue'
void _bad1
void _bad2
void _bad3
