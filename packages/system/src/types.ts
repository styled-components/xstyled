/* eslint-disable @typescript-eslint/no-empty-interface */

export type IVariants = Record<string | number, string | number>
export type ITheme = Record<string | number, unknown>
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
  breakpoints: IBreakpoints
}
  ? TTheme['screens']
  : Record<string, unknown>

export type BreakpointsProps<TType, TTheme extends ITheme> = {
  [P in keyof Breakpoints<TTheme>]?: TType
}

export type SystemProp<TType, TTheme extends ITheme> =
  | TType
  | BreakpointsProps<TType, TTheme>

export interface StyleGenerator {
  (props: IProps): any
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

// Automatic State Props for TypeScript 4.1
// For compatibility reason, we use static types instead
// type StatePropName<TState extends string, TProp extends string> = `${TState}${Capitalize<TProp>}`
// export type StatePropsOfProp<TStates extends string, TPropKey extends string, TPropType> = {
//   [K in TStates as (StatePropName<string & K, TPropKey> | TPropKey)]: TPropType
// }
// export type SystemStateProps<TTheme, TPropKey extends string, TType> = StatePropsOfProp<DefaultStates, TPropKey, SystemProperty<TType, TTheme>>
