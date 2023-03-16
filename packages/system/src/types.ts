import * as CSS from 'csstype'
import type { ITheme, Props } from '@xstyled/util'

export type { ITheme, Props }

export type CSSProperties = CSS.Properties<string | number>

export type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject }

export type CSSScalar = undefined | string | number

export interface CSSObject extends CSSProperties, CSSPseudos {
  [key: string]: CSSObject | CSSScalar
}

export type CSSFromProps<TProps = {}> = (
  props: TProps,
) => CSSObject | null | undefined
export type Mixin = (value: any) => CSSFromProps | CSSObject | null | undefined

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

export type ThemeVariants<T extends ITheme> = ThemeScreens<T> &
  Omit<ThemeStates<T>, '_'>

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
  cssProps?: string[]
  themeGet?: ThemeGetter
  key?: string
  transform?: TransformValue
}

export interface StyleGenerator<TProps = {}> {
  (props: Props<Theme> & TProps, sort?: boolean): CSSObject | null
  meta: {
    props: string[]
    cssGetters: { [key: string]: ThemeGetter }
    getStyle: StyleGenerator<TProps>
    generators?: StyleGenerator[]
  }
  apply: (values: TProps) => CSSFromProps<Props<Theme> & TProps>
}

export interface TransformValue {
  (
    value: any,
    options: {
      rawValue: unknown
      variants: ThemeNamespace | null
      props: Props<Theme>
    },
  ): CSSScalar
}

/**
 * Recursively explores a given object and creates a union of the deep paths
 * leading to primitive values (non-objects.)
 */
export type SynthesizedPath<T extends Record<string, unknown>> = {
  [P in keyof T]:
    | (T[P] extends Record<string, unknown>
        ? `${string & P}.${SynthesizedPath<T[P]>}`
        : `${string & P}`)
    | number
}[T extends any[] ? number & keyof T : keyof T]

export type ThemeNamespaceValue<K extends string, T extends ITheme> =
  | NamespaceType<T[K]>
  | {}

export interface ThemeGetter<T = any> {
  (value: T, defaultValue?: CSSScalar): (props: Props<Theme>) => CSSScalar
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

export type StyleGeneratorProps<T> = T extends StyleGenerator<infer Props>
  ? Props
  : never

export type StyleGeneratorPropsConcat<T> = T extends [infer Head, ...infer Tail]
  ? StyleGeneratorProps<Head> & StyleGeneratorPropsConcat<Tail>
  : unknown
