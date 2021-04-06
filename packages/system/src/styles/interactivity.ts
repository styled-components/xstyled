import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProp, ITheme, Theme } from '../types'

export interface AppearanceProps<T extends ITheme = Theme> {
  appearance?: SystemProp<CSS.Property.Appearance, T>
}
export const appearance = style<AppearanceProps>({
  prop: 'appearance',
})

export interface CursorProps<T extends ITheme = Theme> {
  cursor?: SystemProp<CSS.Property.Cursor, T>
}
export const cursor = style<CursorProps>({
  prop: 'cursor',
})

export interface PointerEventsProps<T extends ITheme = Theme> {
  pointerEvents?: SystemProp<CSS.Property.PointerEvents, T>
}
export const pointerEvents = style<PointerEventsProps>({
  prop: 'pointerEvents',
})

export interface ResizeProps<T extends ITheme = Theme> {
  resize?: SystemProp<CSS.Property.Resize, T>
}
export const resize = style<ResizeProps>({
  prop: 'resize',
})

export interface UserSelectProps<T extends ITheme = Theme> {
  userSelect?: SystemProp<CSS.Property.UserSelect, T>
}
export const userSelect = style<UserSelectProps>({
  prop: 'userSelect',
})

export interface InteractivityProps<T extends ITheme = Theme>
  extends AppearanceProps<T>,
    CursorProps<T>,
    PointerEventsProps<T>,
    ResizeProps<T>,
    UserSelectProps<T> {}
export const interactivity = compose<InteractivityProps>(
  appearance,
  cursor,
  pointerEvents,
  resize,
  userSelect,
)
