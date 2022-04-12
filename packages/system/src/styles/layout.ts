import * as CSS from 'csstype'
import { obj } from '@xstyled/util'
import {
  style,
  compose,
  createStyleGenerator,
  reduceVariants,
  themeGetter,
} from '../style'
import { transformNegative } from '../unit'
import { getPx } from './units'
import { getScreens } from '../theme'
import { SystemProp, ThemeNamespaceValue, ITheme, Theme } from '../types'

export interface DisplayProps<T extends ITheme = Theme> {
  display?: SystemProp<CSS.Property.Display, T>
}
export const display = style<DisplayProps>({
  prop: 'display',
})

export interface FloatProps<T extends ITheme = Theme> {
  float?: SystemProp<CSS.Property.Float, T>
}
export const float = style<FloatProps>({
  prop: 'float',
})

export interface BoxSizingProps<T extends ITheme = Theme> {
  boxSizing?: SystemProp<CSS.Property.BoxSizing, T>
}
export const boxSizing = style<BoxSizingProps>({
  prop: 'boxSizing',
})

export interface ContainerProps<T extends ITheme = Theme> {
  container?: SystemProp<boolean, T>
}
export const container = createStyleGenerator<ContainerProps>({
  getStyle: (props) => {
    if (!props.container) return null
    const breakpoints = getScreens(props)
    let styles = reduceVariants(props, breakpoints, (v: string | number) =>
      v !== 0 ? { maxWidth: v } : {},
    )
    if (obj(props.container)) {
      styles = reduceVariants(props, props.container, () => styles)
    }

    return {
      width: '100%',
      ...styles,
    }
  },
  props: ['container'],
})

export interface OverflowProps<T extends ITheme = Theme> {
  overflow?: SystemProp<CSS.Property.Overflow, T>
}
export const overflow = style<OverflowProps>({
  prop: 'overflow',
})

export interface OverflowXProps<T extends ITheme = Theme> {
  overflowX?: SystemProp<CSS.Property.OverflowX, T>
}
export const overflowX = style<OverflowXProps>({
  prop: 'overflowX',
})

export interface OverflowYProps<T extends ITheme = Theme> {
  overflowY?: SystemProp<CSS.Property.OverflowY, T>
}
export const overflowY = style<OverflowYProps>({
  prop: 'overflowY',
})

export type ThemeZIndex<T extends ITheme = Theme> = ThemeNamespaceValue<
  'zIndices',
  T
>
export const getZIndex = themeGetter<ThemeZIndex>({
  name: 'zIndex',
  key: 'zIndices',
})

export interface ZIndexProps<T extends ITheme = Theme> {
  zIndex?: SystemProp<ThemeZIndex<T> | CSS.Property.ZIndex, T>
}
export const zIndex = style<ZIndexProps>({
  prop: 'zIndex',
  themeGet: getZIndex,
})

export interface PositionProps<T extends ITheme = Theme> {
  position?: SystemProp<CSS.Property.Position, T>
}
export const position = style<PositionProps>({
  prop: 'position',
})

export type ThemeInset<T extends ITheme = Theme> = ThemeNamespaceValue<
  'inset',
  T
>
export const getInset = themeGetter<ThemeInset>({
  name: 'inset',
  key: 'inset',
  compose: getPx,
  transform: transformNegative,
})

export interface TopProps<T extends ITheme = Theme> {
  top?: SystemProp<ThemeInset<T> | number | CSS.Property.Top, T>
}
export const top = style<TopProps>({
  prop: 'top',
  themeGet: getInset,
})

export interface RightProps<T extends ITheme = Theme> {
  right?: SystemProp<ThemeInset<T> | number | CSS.Property.Right, T>
}
export const right = style<RightProps>({
  prop: 'right',
  themeGet: getInset,
})

export interface BottomProps<T extends ITheme = Theme> {
  bottom?: SystemProp<ThemeInset<T> | number | CSS.Property.Bottom, T>
}
export const bottom = style<BottomProps>({
  prop: 'bottom',
  themeGet: getInset,
})

export interface LeftProps<T extends ITheme = Theme> {
  left?: SystemProp<ThemeInset<T> | number | CSS.Property.Left, T>
}
export const left = style<LeftProps>({
  prop: 'left',
  themeGet: getInset,
})

export interface VisibilityProps<T extends ITheme = Theme> {
  visibility?: SystemProp<CSS.Property.Visibility, T>
}
export const visibility = style<VisibilityProps>({
  prop: 'visibility',
})

export interface OverscrollBehaviorProps<T extends ITheme = Theme> {
  overscrollBehavior?: SystemProp<CSS.Property.OverscrollBehavior, T>
}
export const overscrollBehavior = style<OverscrollBehaviorProps>({
  prop: 'overscrollBehavior',
})

export interface ObjectFitProps<T extends ITheme = Theme> {
  objectFit?: SystemProp<CSS.Property.ObjectFit, T>
}
export const objectFit = style<ObjectFitProps>({
  prop: 'objectFit',
})

export interface LayoutProps<T extends ITheme = Theme>
  extends DisplayProps<T>,
    FloatProps<T>,
    BoxSizingProps<T>,
    ContainerProps<T>,
    OverflowProps<T>,
    OverflowXProps<T>,
    OverflowYProps<T>,
    PositionProps<T>,
    ZIndexProps<T>,
    TopProps<T>,
    RightProps<T>,
    BottomProps<T>,
    LeftProps<T>,
    VisibilityProps<T>,
    OverscrollBehaviorProps<T>,
    ObjectFitProps<T> {}
export const layout = compose<LayoutProps>(
  boxSizing,
  display,
  float,
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
