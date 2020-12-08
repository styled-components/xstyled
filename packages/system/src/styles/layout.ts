import * as CSS from 'csstype'
import { obj } from '@xstyled/util'
import {
  style,
  compose,
  createStyleGenerator,
  reduceBreakpoints,
} from '../style'
import { getBreakpoints } from '../media'
import { SystemProperty } from '../types'

export interface DisplayProps<T = {}> {
  display?: SystemProperty<CSS.Property.Display, T>
}
export const display = style<DisplayProps>({
  prop: 'display',
})

export interface BoxSizingProps<T = {}> {
  boxSizing?: SystemProperty<CSS.Property.BoxSizing, T>
}
export const boxSizing = style<BoxSizingProps>({
  prop: 'boxSizing',
})

export interface ContainerProps<T = {}> {
  container?: SystemProperty<boolean, T>
}
export const container = createStyleGenerator<ContainerProps>(
  (props) => {
    if (!props.container) return null
    const breakpoints = getBreakpoints(props)
    let styles = reduceBreakpoints(
      props,
      breakpoints,
      (breakpointValue: string | number) =>
        breakpointValue !== 0 ? { maxWidth: breakpointValue } : {},
    )
    if (obj(props.container)) {
      styles = reduceBreakpoints(props, props.container, () => styles)
    }

    return {
      width: '100%',
      ...styles,
    }
  },
  ['container'],
)

export interface OverflowProps<T = {}> {
  overflow?: SystemProperty<CSS.Property.Overflow, T>
}
export const overflow = style<OverflowProps>({
  prop: 'overflow',
})

export interface OverflowXProps<T = {}> {
  overflowX?: SystemProperty<CSS.Property.OverflowX, T>
}
export const overflowX = style<OverflowXProps>({
  prop: 'overflowX',
})

export interface OverflowYProps<T = {}> {
  overflowY?: SystemProperty<CSS.Property.OverflowY, T>
}
export const overflowY = style<OverflowYProps>({
  prop: 'overflowY',
})

export type LayoutProps<T = {}> = DisplayProps<T> &
  BoxSizingProps<T> &
  ContainerProps<T> &
  OverflowProps<T> &
  OverflowXProps<T> &
  OverflowYProps<T>
export const layout = compose<LayoutProps>(
  boxSizing,
  display,
  container,
  overflow,
  overflowX,
  overflowY,
)
