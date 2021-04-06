export type Path = string | number

export interface ITheme {
  [key: string]: any
  [key: number]: any
}

export interface Props<T extends ITheme = ITheme> {
  [key: string]: any
  [key: number]: any
  theme?: T
}
