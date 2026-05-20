import { th } from '../th'
import { compose, style } from '../style'
import { margin, padding } from '../styles/space'
import type {
  StyleGenerator,
  StyleGeneratorProps,
  StyleGeneratorPropsConcat,
  Props,
  Theme,
  CSSScalar,
} from '../types'
import type { Expect, Equal, Assignable, IsNever } from './_helpers'

// -----------------------------------------------------------------------------
// `th` is callable with a path (string | number) and an optional default.
// It returns a function of `props` that returns a `CSSScalar`.
// -----------------------------------------------------------------------------
const _thCall = th('colors.primary')
const _thWithDefault = th('colors.primary', '#000')
const _thNumeric = th(1)

type _thReturnIsFn = Expect<
  Equal<ReturnType<typeof th>, (props: Props<Theme>) => CSSScalar>
>

void _thCall
void _thWithDefault
void _thNumeric

// `th.color`, `th.space`, etc. are exposed as the underlying ThemeGetters.
const _thColor = th.color('primary')
const _thSpace = th.space(2)
const _thRadius = th.radius('md')
void _thColor
void _thSpace
void _thRadius

// `th.color` and `th.space` should NOT be `never` (proves the dynamic
// attachment in `th.ts` types correctly via the `ThGetters` interface).
export type _thColorExists = Expect<
  IsNever<typeof th.color> extends true ? false : true
>
export type _thSpaceExists = Expect<
  IsNever<typeof th.space> extends true ? false : true
>

// `th.color(value)` itself returns a function of props (`ThemeGetter`).
const _thColorApplied = th.color('primary')({ theme: {} })
type _thColorAppliedIsScalar = Expect<
  Equal<typeof _thColorApplied, CSSScalar>
>
void _thColorApplied

// -----------------------------------------------------------------------------
// `compose()` flows props through. Both overloads carry the props.
// -----------------------------------------------------------------------------
interface FooProps {
  foo?: string
}
interface BarProps {
  bar?: number
}

const fooGen = style<FooProps>({ prop: 'foo', css: 'color' })
const barGen = style<BarProps>({ prop: 'bar', css: 'fontSize' })

type _fooPropsExtracted = Expect<
  Equal<StyleGeneratorProps<typeof fooGen>, FooProps>
>
type _barPropsExtracted = Expect<
  Equal<StyleGeneratorProps<typeof barGen>, BarProps>
>

// `compose()` should union (`&`) the props of every generator it composes.
const composed = compose(fooGen, barGen)
type ComposedProps = StyleGeneratorProps<typeof composed>

// FooProps and BarProps must both be reachable through the composed generator.
export type _composedHasFoo = Expect<Assignable<ComposedProps, { foo: string }>>
export type _composedHasBar = Expect<Assignable<ComposedProps, { bar: number }>>

// `StyleGeneratorPropsConcat` directly composes a tuple of generators.
type _concat = Expect<
  Equal<
    StyleGeneratorPropsConcat<[typeof fooGen, typeof barGen]>,
    FooProps & BarProps & unknown
  >
>

// -----------------------------------------------------------------------------
// `style()` returns a `StyleGenerator`, including for the array form.
// -----------------------------------------------------------------------------
const arrayProp = style({ prop: ['margin', 'm'], css: 'margin' })
type _isGen = Expect<
  Assignable<StyleGenerator, typeof arrayProp>
>

// `margin` and `padding` are pre-built generators; composing them yields the
// merged props.
const spaceMixed = compose(margin, padding)
type _spaceMixedProps = StyleGeneratorProps<typeof spaceMixed>
// We don't pin the exact shape; we just require it stays a record-ish.
export type _spaceMixedExtends = Expect<Assignable<object, _spaceMixedProps>>
