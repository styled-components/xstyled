import * as CSS from 'csstype'
import { obj } from '@xstyled/util'
import {
  style,
  compose,
  createStyleGenerator,
  reduceStates,
  themeGetter,
} from '../style'
import { transformNegative } from '../unit'
import { getPx } from './units'
import { getBreakpoints } from '../media'
import { SystemProp, VariantsType, ITheme, Theme } from '../types'

type DisplayProp<T extends ITheme> = SystemProp<CSS.Property.Display, T>
export interface DisplayProps<T extends ITheme = Theme> {
  display?: DisplayProp<T>
}
export const display = style({
  prop: 'display',
})

type FloatProp<T extends ITheme> = SystemProp<CSS.Property.Float, T>
export interface FloatProps<T extends ITheme = Theme> {
  float?: FloatProp<T>
}
export const float = style({
  prop: 'float',
})

type BoxSizingProp<T extends ITheme> = SystemProp<CSS.Property.BoxSizing, T>
export interface BoxSizingProps<T extends ITheme = Theme> {
  boxSizing?: BoxSizingProp<T>
}
export const boxSizing = style({
  prop: 'boxSizing',
})

type ContainerProp<T extends ITheme> = SystemProp<boolean, T>
export interface ContainerProps<T extends ITheme = Theme> {
  container?: ContainerProp<T>
}
export const container = createStyleGenerator(
  (props) => {
    if (!props.container) return null
    const breakpoints = getBreakpoints(props)
    let styles = reduceStates(props, breakpoints, (v: string | number) =>
      v !== 0 ? { maxWidth: v } : {},
    )
    if (obj(props.container)) {
      styles = reduceStates(props, props.container, () => styles)
    }

    return {
      width: '100%',
      ...styles,
    }
  },
  ['container'],
)

type OverflowProp<T extends ITheme> = SystemProp<CSS.Property.Overflow, T>
export interface OverflowProps<T extends ITheme = Theme> {
  overflow?: OverflowProp<T>
}
export const overflow = style({
  prop: 'overflow',
})

type OverflowXProp<T extends ITheme> = SystemProp<CSS.Property.OverflowX, T>
export interface OverflowXProps<T extends ITheme = Theme> {
  overflowX?: OverflowXProp<T>
}
export const overflowX = style({
  prop: 'overflowX',
})

type OverflowYProp<T extends ITheme> = SystemProp<CSS.Property.OverflowY, T>
export interface OverflowYProps<T extends ITheme = Theme> {
  overflowY?: OverflowYProp<T>
}
export const overflowY = style({
  prop: 'overflowY',
})

export type ZIndexGetter<T extends ITheme = Theme> = VariantsType<T['zIndices']>
export const getZIndex = themeGetter<ZIndexGetter>({
  name: 'zIndex',
  key: 'zIndices',
})

type ZIndexProp<T extends ITheme> = SystemProp<
  ZIndexGetter<T> | CSS.Property.ZIndex,
  T
>
export interface ZIndexProps<T extends ITheme = Theme> {
  zIndex?: ZIndexProp<T>
}
export const zIndex = style({
  prop: 'zIndex',
  themeGet: getZIndex,
})

type PositionProp<T extends ITheme> = SystemProp<CSS.Property.Position, T>
export interface PositionProps<T extends ITheme = Theme> {
  position?: PositionProp<T>
}
export const position = style({ prop: 'position' })

export type InsetGetter<T extends ITheme = Theme> = VariantsType<T['inset']>
export const getInset = themeGetter({
  name: 'inset',
  key: 'inset',
  compose: getPx,
  transform: transformNegative,
})

type TopProp<T extends ITheme> = SystemProp<
  InsetGetter<T> | CSS.Property.Top,
  T
>
export interface TopProps<T extends ITheme = Theme> {
  top?: TopProp<T>
}
export const top = style({
  prop: 'top',
  themeGet: getInset,
})

type RightProp<T extends ITheme> = SystemProp<
  InsetGetter<T> | CSS.Property.Right,
  T
>
export interface RightProps<T extends ITheme = Theme> {
  right?: RightProp<T>
}
export const right = style({
  prop: 'right',
  themeGet: getInset,
})

type BottomProp<T extends ITheme> = SystemProp<
  InsetGetter<T> | CSS.Property.Bottom,
  T
>
export interface BottomProps<T extends ITheme = Theme> {
  bottom?: BottomProp<T>
}
export const bottom = style({
  prop: 'bottom',
  themeGet: getInset,
})

type LeftProp<T extends ITheme> = SystemProp<
  InsetGetter<T> | CSS.Property.Left,
  T
>
export interface LeftProps<T extends ITheme = Theme> {
  left?: LeftProp<T>
}
export const left = style({
  prop: 'left',
  themeGet: getInset,
})

type VisibilityProp<T extends ITheme> = SystemProp<CSS.Property.Visibility, T>
export interface VisibilityProps<T extends ITheme = Theme> {
  visibility?: VisibilityProp<T>
}
export const visibility = style({
  prop: 'visibility',
})

type OverscrollBehaviorProp<T extends ITheme> = SystemProp<
  CSS.Property.OverscrollBehavior,
  T
>
export interface OverscrollBehaviorProps<T extends ITheme = Theme> {
  overscrollBehavior?: OverscrollBehaviorProp<T>
}
export const overscrollBehavior = style({
  prop: 'overscrollBehavior',
})

type ObjectFitProp<T extends ITheme> = SystemProp<CSS.Property.ObjectFit, T>
export interface ObjectFitProps<T extends ITheme = Theme> {
  objectFit?: ObjectFitProp<T>
}
export const objectFit = style({
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
export const layout = compose(
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
