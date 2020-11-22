import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProperty } from '../types'

export interface DisplayProps<T = {}> {
  display?: SystemProperty<CSS.Property.Display, T>
}
export const display = style<DisplayProps>({
  prop: 'display',
})

export type LayoutProps<T = {}> = DisplayProps<T>
export const layout = compose<LayoutProps>(display)
