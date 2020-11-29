import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProperty } from '../types'

export interface AppearanceProps<T = {}> {
  appearance?: SystemProperty<CSS.Property.Appearance, T>
}
export const appearance = style<AppearanceProps>({
  prop: 'appearance',
})

export interface CursorProps<T = {}> {
  cursor?: SystemProperty<CSS.Property.Cursor, T>
}
export const cursor = style<CursorProps>({
  prop: 'cursor',
})

export interface PointerEventsProps<T = {}> {
  pointerEvents?: SystemProperty<CSS.Property.PointerEvents, T>
}
export const pointerEvents = style<PointerEventsProps>({
  prop: 'pointerEvents',
})

export interface ResizeProps<T = {}> {
  resize?: SystemProperty<CSS.Property.Resize, T>
}
export const resize = style<ResizeProps>({
  prop: 'resize',
})

export interface UserSelectProps<T = {}> {
  userSelect?: SystemProperty<CSS.Property.UserSelect, T>
}
export const userSelect = style<UserSelectProps>({
  prop: 'userSelect',
})

export type InteractivityProps<T = {}> = AppearanceProps<T> &
  CursorProps<T> &
  PointerEventsProps<T> &
  ResizeProps<T> &
  UserSelectProps<T>
export const interactivity = compose<InteractivityProps>(
  appearance,
  cursor,
  pointerEvents,
  resize,
  userSelect,
)
