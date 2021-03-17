/* eslint-disable @typescript-eslint/no-empty-interface */
export type IVariants = Record<string | number, string | number>
export type IStates = Record<string, string>
export type ITheme = {
  animations?: unknown
  borders?: unknown
  borderStyles?: unknown
  borderWidths?: unknown
  colors?: unknown
  fonts?: unknown
  fontSizes?: unknown
  fontWeights?: unknown
  gridTemplateColumns?: unknown
  gridTemplateRows?: unknown
  inset?: unknown
  letterSpacings?: unknown
  lineHeights?: unknown
  radii?: unknown
  ringWidths?: unknown
  shadows?: unknown
  screens?: unknown
  states?: unknown
  settings?: unknown
  sizes?: unknown
  space?: unknown
  timingFunctions?: unknown
  transforms?: unknown
  transitions?: unknown
  transitionProperties?: unknown
  transformers?: unknown
  zIndices?: unknown
}
export type IProps = {
  [Key: string]: any
  [Key: number]: any
  theme?: any
}
export type IStyles = Record<string, unknown>
export type IBreakpoints = Record<string | number, number>
export type IPropsWithTheme<TTheme extends ITheme> = IProps & { theme: TTheme }

export type Mixin = (value: any) => IStyles | null | undefined

export interface StyleGetter {
  (props: IProps): any
}

export type Breakpoints<TTheme extends ITheme> = TTheme extends {
  screens: IBreakpoints
}
  ? TTheme['screens']
  : Record<string, unknown>

export type States<TTheme extends ITheme> = TTheme extends {
  states: IStates
}
  ? TTheme['states']
  : Record<string, unknown>

export type VariantProps<TType, TTheme extends ITheme> = {
  [P in keyof (Breakpoints<TTheme> & States<TTheme>)]?:
    | TType
    | VariantProps<TType, TTheme>
}

export type SystemProp<TType, TTheme extends ITheme> =
  | TType
  | VariantProps<TType, TTheme>

export interface StyleGenerator {
  (props: IProps, sort?: boolean): any
  meta: {
    props: string[]
    getStyle: StyleGenerator
    generators?: StyleGenerator[]
  }
}

export interface TransformValue<TValueType = any> {
  (
    value: string | number,
    options: {
      rawValue: TValueType
      variants: IVariants
      props: IProps
    },
  ): string | number | null
}

export interface ThemeGetter<TValueType = any> {
  (value: TValueType, defaultValue?: any): (props: IProps) => any
  meta: {
    name?: string
    transform?: TransformValue<TValueType>
  }
}

// Theme

/**
 * Define a type from a variant.
 */
export type VariantsType<
  TVariants,
  TBaseType = number | string
> = TVariants extends ReadonlyArray<any>
  ? number | (TBaseType & {})
  : TVariants extends Array<any>
  ? number | (TBaseType & {})
  : TVariants extends { default: any }
  ? keyof TVariants | (TBaseType & {}) | true
  : TVariants extends IVariants
  ? keyof TVariants | (TBaseType & {})
  : TBaseType & {}

export type FirstArg<T extends (...args: any) => any> = Parameters<T>[0]

/* Theme exposed to be overriden */
export interface Theme extends ITheme {}
