import { DefaultBreakpoints } from './defaultBreakpoints'

export interface Dictionary<T> {
  [Key: string]: T
}
export type AnyDictionary = Dictionary<any>

export interface IVariants {
  [Key: string]: number
  [Key: number]: number
}
export type ITheme = AnyDictionary
export type IProps = {
  [Key: string]: number
  [Key: number]: number
  theme?: any
}
export type IStyles = AnyDictionary
export type IPropsWithTheme<TTheme extends ITheme> = IProps & { theme: TTheme }

export type Mixin = (
  props: IProps,
  { value }: { value: any },
) => IStyles | null | undefined

export interface StyleGetter {
  (props: IProps): any
}

export type Breakpoints<TTheme extends ITheme> = TTheme extends {
  breakpoints: AnyDictionary
}
  ? TTheme['breakpoints']
  : DefaultBreakpoints

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
  : TVariants extends AnyDictionary
  ? keyof TVariants | (TBaseType & {})
  : TBaseType & {}

export type FirstArg<T extends (...args: any) => any> = Parameters<T>[0]

/* Theme exposed to be overriden */
export interface Theme {}

// Automatic State Props for TypeScript 4.1
// For compatibility reason, we use static types instead
// type StatePropName<TState extends string, TProp extends string> = `${TState}${Capitalize<TProp>}`
// export type StatePropsOfProp<TStates extends string, TPropKey extends string, TPropType> = {
//   [K in TStates as (StatePropName<string & K, TPropKey> | TPropKey)]: TPropType
// }
// export type SystemStateProps<TTheme, TPropKey extends string, TType> = StatePropsOfProp<DefaultStates, TPropKey, SystemProperty<TType, TTheme>>
