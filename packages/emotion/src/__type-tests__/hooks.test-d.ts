import {
  useTheme,
  useTh,
  useColor,
  useSpace,
  useFontSize,
  useRadius,
  useShadow,
  useZIndex,
  useUp,
  useDown,
  useBreakpoint,
  useScreens,
  useColorMode,
} from '../index'
import type { CSSScalar, Screens } from '../index'
import type { Expect, Equal, IsNever } from './_helpers'

// React's rules-of-hooks linter requires hook calls to live inside a
// function whose name starts with `use` or with a capital letter; these
// helpers are never invoked at runtime — only type-checked.

function _useThemeAssertions() {
  const theme = useTheme()
  // emotion's useTheme returns its own augmentable Theme — we only assert
  // it isn't `never`.
  type _t = Expect<IsNever<typeof theme> extends true ? false : true>
  void (null as unknown as _t)
}
void _useThemeAssertions

function _useThAssertions() {
  const value = useTh('colors.primary')
  type _t = Expect<Equal<typeof value, CSSScalar>>
  void (null as unknown as _t)
}
void _useThAssertions

function _useTokenHookAssertions() {
  const c = useColor('primary')
  const s = useSpace(2)
  const f = useFontSize('lg')
  const r = useRadius('md')
  const z = useZIndex(10)
  const shadow = useShadow('md')
  type _c = Expect<Equal<typeof c, CSSScalar>>
  type _s = Expect<Equal<typeof s, CSSScalar>>
  type _f = Expect<Equal<typeof f, CSSScalar>>
  type _r = Expect<Equal<typeof r, CSSScalar>>
  type _z = Expect<Equal<typeof z, CSSScalar>>
  type _shadow = Expect<Equal<typeof shadow, CSSScalar>>
  void (null as unknown as _c)
  void (null as unknown as _s)
  void (null as unknown as _f)
  void (null as unknown as _r)
  void (null as unknown as _z)
  void (null as unknown as _shadow)
}
void _useTokenHookAssertions

function _useBreakpointAssertions() {
  const up = useUp('md')
  const upNum = useUp(768)
  const down = useDown('lg')
  const bp = useBreakpoint()
  const screens = useScreens()
  type _up = Expect<Equal<typeof up, boolean>>
  type _upNum = Expect<Equal<typeof upNum, boolean>>
  type _down = Expect<Equal<typeof down, boolean>>
  type _bp = Expect<Equal<typeof bp, string | null>>
  type _screens = Expect<Equal<typeof screens, Screens>>
  void (null as unknown as _up)
  void (null as unknown as _upNum)
  void (null as unknown as _down)
  void (null as unknown as _bp)
  void (null as unknown as _screens)
}
void _useBreakpointAssertions

function _useBreakpointNegations() {
  // @ts-expect-error booleans aren't valid breakpoint keys
  useUp(true)
  // @ts-expect-error objects aren't valid breakpoint keys
  useUp({ key: 'md' })
  // @ts-expect-error booleans aren't valid breakpoint keys
  useDown(false)
}
void _useBreakpointNegations

function _useColorModeAssertions() {
  const [mode, setMode] = useColorMode()
  type _mode = Expect<Equal<typeof mode, string | null>>
  type _setMode = Expect<Equal<typeof setMode, (mode: string | null) => void>>
  void (null as unknown as _mode)
  void (null as unknown as _setMode)
}
void _useColorModeAssertions

export type _hookExists = Expect<
  IsNever<typeof useTh> extends true ? false : true
>
