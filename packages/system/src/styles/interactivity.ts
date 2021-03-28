import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProp, ITheme, Theme } from '../types'

type AppearanceProp<T extends ITheme> = SystemProp<CSS.Property.Appearance, T>
export interface AppearanceProps<T extends ITheme = Theme> {
  appearance?: AppearanceProp<T>
}
export const appearance = style({
  prop: 'appearance',
})

type CursorProp<T extends ITheme> = SystemProp<CSS.Property.Cursor, T>
export interface CursorProps<T extends ITheme = Theme> {
  cursor?: CursorProp<T>
}
export const cursor = style({
  prop: 'cursor',
})

type PointerEventsProp<T extends ITheme> = SystemProp<
  CSS.Property.PointerEvents,
  T
>
export interface PointerEventsProps<T extends ITheme = Theme> {
  pointerEvents?: PointerEventsProp<T>
}
export const pointerEvents = style({
  prop: 'pointerEvents',
})

type ResizeProp<T extends ITheme> = SystemProp<CSS.Property.Resize, T>
export interface ResizeProps<T extends ITheme = Theme> {
  resize?: ResizeProp<T>
}
export const resize = style({
  prop: 'resize',
})

type UserSelectProp<T extends ITheme> = SystemProp<CSS.Property.UserSelect, T>
export interface UserSelectProps<T extends ITheme = Theme> {
  userSelect?: UserSelectProp<T>
}
export const userSelect = style({
  prop: 'userSelect',
})

export interface InteractivityProps<T extends ITheme = Theme>
  extends AppearanceProps<T>,
    CursorProps<T>,
    PointerEventsProps<T>,
    ResizeProps<T>,
    UserSelectProps<T> {}
export const interactivity = compose(
  appearance,
  cursor,
  pointerEvents,
  resize,
  userSelect,
)
