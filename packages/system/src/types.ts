export type Variants = {
  [key: string]: any
}

export interface Theme {
  [key: string]: any
}

export interface Props {
  [key: string]: any
}

export interface ThemeProps<T> {
  theme: T
}

export type StyledProps<P, T> = P & ThemeProps<T>

export interface DefaultThemeBreakpoints {
  xs: 0
  sm: 576
  md: 768
  lg: 992
  xl: 1200
}

export type ThemeBreakpoints<TTheme extends Theme> = TTheme extends {
  breakpoints: Variants
}
  ? ExtractThemeProperty<TTheme, 'breakpoints'>
  : DefaultThemeBreakpoints

export type BreakpointsProperties<PropType, TTheme extends Theme> = {
  [P in keyof ThemeBreakpoints<TTheme>]?: PropType
}

// CSS

export type SystemProperty<PropType, TTheme extends Theme> =
  | PropType
  | BreakpointsProperties<PropType, TTheme>

export interface StyleGenerator<TProps = any> {
  (props: Props): any
  meta: {
    props: string[]
    getStyle: StyleGenerator<TProps>
    generators?: StyleGenerator[]
  }
}

export interface TransformValue<TVariants, TBaseType> {
  (
    value: string | number,
    options: {
      rawValue: VariantsType<TVariants, TBaseType>
      variants: TVariants
      props: Props
    },
  ): string | number | null
}

export interface ThemeGetter<TVariants, TBaseType> {
  (value: VariantsType<TVariants, TBaseType>, defaultValue?: any): (
    props: Props,
  ) => any
  meta: {
    name?: string
    transform?: TransformValue<TVariants, TBaseType>
  }
}

// Theme

/**
 * Extract theme property.
 */
export type ExtractThemeProperty<
  TTheme extends Theme,
  Property extends string
> = TTheme[Property]

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
  : TVariants extends Variants
  ? keyof TVariants | (TBaseType & {})
  : TBaseType & {}

/**
 * Extract type from a theme getter.
 */
export type ExtractThemeGetterType<
  T extends (...args: any) => any
> = Parameters<T>[0]
