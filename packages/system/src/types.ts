import { ITheme, Props } from '@xstyled/util'

export { ITheme, Props }

export type StyleScalarValue = null | undefined | string | number

export interface Styles {
  [key: string]: StyleScalarValue | Styles
}
export type StyleFromProps<TProps = {}> = (
  props: TProps,
) => Styles | null | undefined
export type Mixin = (value: any) => StyleFromProps | Styles | null | undefined

export type ThemeAlias = (props: Props<Theme>) => ThemeValue
export type ThemeValue =
  | undefined
  | null
  | string
  | string[]
  | number
  | number[]
  | ThemeAlias
  | ThemeNamespace
export interface States {
  [key: string]: string | null
}
export interface Screens {
  [key: string]: number
  [key: number]: number
}
export type Variants = States & Screens
export interface Colors {
  [key: string]: string | Colors
  [key: number]: string | Colors
}
export interface Transformers {
  [key: string]: TransformValue
}
export interface ThemeNamespace {
  [key: string]: ThemeValue
  [key: number]: ThemeValue
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Theme extends ITheme {}

export type NamespaceType<T> = T extends ReadonlyArray<unknown>
  ? number
  : T extends Array<unknown>
  ? number
  : T extends { default: ThemeValue }
  ? keyof T | true
  : T extends ThemeNamespace
  ? keyof T
  : {}

export type ThemeScreens<T extends ITheme> = T extends { screens: Screens }
  ? T['screens']
  : unknown

export type ThemeStates<T extends ITheme> = T extends {
  states: States
}
  ? T['states']
  : unknown

export type ThemeVariants<T extends ITheme> = ThemeScreens<T> & ThemeStates<T>

export type ThemeProp<TType, TTheme extends ITheme> = {
  [P in keyof ThemeVariants<TTheme>]?: TType | ThemeProp<TType, TTheme>
}

export type SystemProp<TType, TTheme extends ITheme> =
  | TType
  | ThemeProp<TType, TTheme>

export type CSSOption = string | string[] | Mixin

export interface StyleOptions {
  prop: string | string[] | readonly string[]
  css?: CSSOption
  themeGet?: ThemeGetter
  key?: string
  transform?: TransformValue
}

export interface StyleGenerator<TProps = {}> {
  (props: Props<Theme> & TProps, sort?: boolean): Styles | null
  meta: {
    props: string[]
    getStyle: StyleGenerator<TProps>
    generators?: StyleGenerator[]
  }
  apply: (values: TProps) => StyleFromProps<Props<Theme> & TProps>
}

export interface TransformValue {
  (
    value: any,
    options: {
      rawValue: unknown
      variants: ThemeNamespace | null
      props: Props<Theme>
    },
  ): StyleScalarValue
}

export type ThemeNamespaceValue<K extends string, T extends ITheme> =
  | NamespaceType<T[K]>
  | {}

export interface ThemeGetter<T = any> {
  (value: T, defaultValue?: StyleScalarValue): (
    props: Props<Theme>,
  ) => StyleScalarValue
  meta: {
    name?: string
    transform?: TransformValue
  }
}

export type ThemeGetterType<T extends ThemeGetter> = T extends ThemeGetter<
  infer T
>
  ? T
  : never
