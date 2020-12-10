import * as CSS from 'csstype'
import { obj } from '@xstyled/util'
import {
  style,
  compose,
  createStyleGenerator,
  reduceBreakpoints,
  themeGetter,
} from '../style'
import { transformNegative } from '../unit'
import { getPx } from './units'
import { getBreakpoints } from '../media'
import { SystemProperty, VariantsType, ExtractThemeProperty } from '../types'

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

export type ZIndexGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'zIndices'>
>
export const getZIndex = themeGetter({
  name: 'zIndex',
  key: 'zIndices',
})

export interface ZIndexProps<T = {}> {
  zIndex?: SystemProperty<ZIndexGetter<T> | CSS.Property.ZIndex, T>
}
export const zIndex = style<ZIndexProps>({
  prop: 'zIndex',
  themeGet: getZIndex,
})

export interface PositionProps<T = {}> {
  position?: SystemProperty<CSS.Property.Position, T>
}
export const position = style<PositionProps>({ prop: 'position' })

export const getInset = themeGetter({
  name: 'inset',
  key: 'inset',
  compose: getPx,
  transform: transformNegative,
})

export interface TopProps<T = {}> {
  top?: SystemProperty<CSS.Property.Top, T>
}
export const top = style<TopProps>({
  prop: 'top',
  themeGet: getInset,
})

export interface RightProps<T = {}> {
  right?: SystemProperty<CSS.Property.Right, T>
}
export const right = style<RightProps>({
  prop: 'right',
  themeGet: getInset,
})

export interface BottomProps<T = {}> {
  bottom?: SystemProperty<CSS.Property.Bottom, T>
}
export const bottom = style<BottomProps>({
  prop: 'bottom',
  themeGet: getInset,
})

export interface LeftProps<T = {}> {
  left?: SystemProperty<CSS.Property.Left, T>
}
export const left = style<LeftProps>({
  prop: 'left',
  themeGet: getInset,
})

export interface VisibilityProps<T = {}> {
  visibility?: SystemProperty<CSS.Property.Visibility, T>
}
export const visibility = style<VisibilityProps>({
  prop: 'visibility',
})

export interface OverscrollBehaviorProps<T = {}> {
  overscrollBehavior?: SystemProperty<CSS.Property.OverscrollBehavior, T>
}
export const overscrollBehavior = style<OverscrollBehaviorProps>({
  prop: 'overscrollBehavior',
})

export interface ObjectFitProps<T = {}> {
  objectFit?: SystemProperty<CSS.Property.ObjectFit, T>
}
export const objectFit = style<ObjectFitProps>({
  prop: 'objectFit',
})

export type LayoutProps<T = {}> = DisplayProps<T> &
  BoxSizingProps<T> &
  ContainerProps<T> &
  OverflowProps<T> &
  OverflowXProps<T> &
  OverflowYProps<T> &
  PositionProps<T> &
  ZIndexProps<T> &
  TopProps<T> &
  RightProps<T> &
  BottomProps<T> &
  LeftProps<T> &
  VisibilityProps<T> &
  OverscrollBehaviorProps<T> &
  ObjectFitProps<T>
export const layout = compose<LayoutProps>(
  boxSizing,
  display,
  container,
  overflow,
  overflowX,
  overflowY,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  visibility,
  overscrollBehavior,
  objectFit,
)
