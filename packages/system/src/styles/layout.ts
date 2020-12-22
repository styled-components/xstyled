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
import { SystemProp, VariantsType, ITheme, Theme } from '../types'

type DisplayProp<T> = SystemProp<CSS.Property.Display, T>
export interface DisplayProps<T extends ITheme = Theme> {
  display?: DisplayProp<T>
  motionSafeDisplay?: DisplayProp<T>
  motionReduceDisplay?: DisplayProp<T>
  firstDisplay?: DisplayProp<T>
  lastDisplay?: DisplayProp<T>
  oddDisplay?: DisplayProp<T>
  evenDisplay?: DisplayProp<T>
  visitedDisplay?: DisplayProp<T>
  checkedDisplay?: DisplayProp<T>
  focusWithinDisplay?: DisplayProp<T>
  hoverDisplay?: DisplayProp<T>
  focusDisplay?: DisplayProp<T>
  focusVisibleDisplay?: DisplayProp<T>
  activeDisplay?: DisplayProp<T>
  disabledDisplay?: DisplayProp<T>
  placeholderDisplay?: DisplayProp<T>
}
export const display = style({
  prop: 'display',
})

type BoxSizingProp<T> = SystemProp<CSS.Property.BoxSizing, T>
export interface BoxSizingProps<T extends ITheme = Theme> {
  boxSizing?: BoxSizingProp<T>
  motionSafeBoxSizing?: BoxSizingProp<T>
  motionReduceBoxSizing?: BoxSizingProp<T>
  firstBoxSizing?: BoxSizingProp<T>
  lastBoxSizing?: BoxSizingProp<T>
  oddBoxSizing?: BoxSizingProp<T>
  evenBoxSizing?: BoxSizingProp<T>
  visitedBoxSizing?: BoxSizingProp<T>
  checkedBoxSizing?: BoxSizingProp<T>
  focusWithinBoxSizing?: BoxSizingProp<T>
  hoverBoxSizing?: BoxSizingProp<T>
  focusBoxSizing?: BoxSizingProp<T>
  focusVisibleBoxSizing?: BoxSizingProp<T>
  activeBoxSizing?: BoxSizingProp<T>
  disabledBoxSizing?: BoxSizingProp<T>
  placeholderBoxSizing?: BoxSizingProp<T>
}
export const boxSizing = style({
  prop: 'boxSizing',
})

type ContainerProp<T> = SystemProp<boolean, T>
export interface ContainerProps<T extends ITheme = Theme> {
  container?: ContainerProp<T>
  motionSafeContainer?: ContainerProp<T>
  motionReduceContainer?: ContainerProp<T>
  firstContainer?: ContainerProp<T>
  lastContainer?: ContainerProp<T>
  oddContainer?: ContainerProp<T>
  evenContainer?: ContainerProp<T>
  visitedContainer?: ContainerProp<T>
  checkedContainer?: ContainerProp<T>
  focusWithinContainer?: ContainerProp<T>
  hoverContainer?: ContainerProp<T>
  focusContainer?: ContainerProp<T>
  focusVisibleContainer?: ContainerProp<T>
  activeContainer?: ContainerProp<T>
  disabledContainer?: ContainerProp<T>
  placeholderContainer?: ContainerProp<T>
}
export const container = createStyleGenerator(
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

type OverflowProp<T> = SystemProp<CSS.Property.Overflow, T>
export interface OverflowProps<T extends ITheme = Theme> {
  overflow?: OverflowProp<T>
  motionSafeOverflow?: OverflowProp<T>
  motionReduceOverflow?: OverflowProp<T>
  firstOverflow?: OverflowProp<T>
  lastOverflow?: OverflowProp<T>
  oddOverflow?: OverflowProp<T>
  evenOverflow?: OverflowProp<T>
  visitedOverflow?: OverflowProp<T>
  checkedOverflow?: OverflowProp<T>
  focusWithinOverflow?: OverflowProp<T>
  hoverOverflow?: OverflowProp<T>
  focusOverflow?: OverflowProp<T>
  focusVisibleOverflow?: OverflowProp<T>
  activeOverflow?: OverflowProp<T>
  disabledOverflow?: OverflowProp<T>
  placeholderOverflow?: OverflowProp<T>
}
export const overflow = style({
  prop: 'overflow',
})

type OverflowXProp<T> = SystemProp<CSS.Property.OverflowX, T>
export interface OverflowXProps<T extends ITheme = Theme> {
  overflowX?: OverflowXProp<T>
  motionSafeOverflowX?: OverflowXProp<T>
  motionReduceOverflowX?: OverflowXProp<T>
  firstOverflowX?: OverflowXProp<T>
  lastOverflowX?: OverflowXProp<T>
  oddOverflowX?: OverflowXProp<T>
  evenOverflowX?: OverflowXProp<T>
  visitedOverflowX?: OverflowXProp<T>
  checkedOverflowX?: OverflowXProp<T>
  focusWithinOverflowX?: OverflowXProp<T>
  hoverOverflowX?: OverflowXProp<T>
  focusOverflowX?: OverflowXProp<T>
  focusVisibleOverflowX?: OverflowXProp<T>
  activeOverflowX?: OverflowXProp<T>
  disabledOverflowX?: OverflowXProp<T>
  placeholderOverflowX?: OverflowXProp<T>
}
export const overflowX = style({
  prop: 'overflowX',
})

type OverflowYProp<T> = SystemProp<CSS.Property.OverflowY, T>
export interface OverflowYProps<T extends ITheme = Theme> {
  overflowY?: OverflowYProp<T>
  motionSafeOverflowY?: OverflowYProp<T>
  motionReduceOverflowY?: OverflowYProp<T>
  firstOverflowY?: OverflowYProp<T>
  lastOverflowY?: OverflowYProp<T>
  oddOverflowY?: OverflowYProp<T>
  evenOverflowY?: OverflowYProp<T>
  visitedOverflowY?: OverflowYProp<T>
  checkedOverflowY?: OverflowYProp<T>
  focusWithinOverflowY?: OverflowYProp<T>
  hoverOverflowY?: OverflowYProp<T>
  focusOverflowY?: OverflowYProp<T>
  focusVisibleOverflowY?: OverflowYProp<T>
  activeOverflowY?: OverflowYProp<T>
  disabledOverflowY?: OverflowYProp<T>
  placeholderOverflowY?: OverflowYProp<T>
}
export const overflowY = style({
  prop: 'overflowY',
})

export type ZIndexGetter<T extends ITheme = Theme> = VariantsType<T['zIndices']>
export const getZIndex = themeGetter<ZIndexGetter>({
  name: 'zIndex',
  key: 'zIndices',
})

type ZIndexProp<T> = SystemProp<ZIndexGetter<T> | CSS.Property.ZIndex, T>
export interface ZIndexProps<T extends ITheme = Theme> {
  zIndex?: ZIndexProp<T>
  motionSafeZIndex?: ZIndexProp<T>
  motionReduceZIndex?: ZIndexProp<T>
  firstZIndex?: ZIndexProp<T>
  lastZIndex?: ZIndexProp<T>
  oddZIndex?: ZIndexProp<T>
  evenZIndex?: ZIndexProp<T>
  visitedZIndex?: ZIndexProp<T>
  checkedZIndex?: ZIndexProp<T>
  focusWithinZIndex?: ZIndexProp<T>
  hoverZIndex?: ZIndexProp<T>
  focusZIndex?: ZIndexProp<T>
  focusVisibleZIndex?: ZIndexProp<T>
  activeZIndex?: ZIndexProp<T>
  disabledZIndex?: ZIndexProp<T>
  placeholderZIndex?: ZIndexProp<T>
}
export const zIndex = style({
  prop: 'zIndex',
  themeGet: getZIndex,
})

type PositionProp<T> = SystemProp<CSS.Property.Position, T>
export interface PositionProps<T extends ITheme = Theme> {
  position?: PositionProp<T>
  motionSafePosition?: PositionProp<T>
  motionReducePosition?: PositionProp<T>
  firstPosition?: PositionProp<T>
  lastPosition?: PositionProp<T>
  oddPosition?: PositionProp<T>
  evenPosition?: PositionProp<T>
  visitedPosition?: PositionProp<T>
  checkedPosition?: PositionProp<T>
  focusWithinPosition?: PositionProp<T>
  hoverPosition?: PositionProp<T>
  focusPosition?: PositionProp<T>
  focusVisiblePosition?: PositionProp<T>
  activePosition?: PositionProp<T>
  disabledPosition?: PositionProp<T>
  placeholderPosition?: PositionProp<T>
}
export const position = style({ prop: 'position' })

export type InsetGetter<T extends ITheme = Theme> = VariantsType<T['inset']>
export const getInset = themeGetter({
  name: 'inset',
  key: 'inset',
  compose: getPx,
  transform: transformNegative,
})

type TopProp<T> = SystemProp<InsetGetter<T> | CSS.Property.Top, T>
export interface TopProps<T extends ITheme = Theme> {
  top?: TopProp<T>
  motionSafeTop?: TopProp<T>
  motionReduceTop?: TopProp<T>
  firstTop?: TopProp<T>
  lastTop?: TopProp<T>
  oddTop?: TopProp<T>
  evenTop?: TopProp<T>
  visitedTop?: TopProp<T>
  checkedTop?: TopProp<T>
  focusWithinTop?: TopProp<T>
  hoverTop?: TopProp<T>
  focusTop?: TopProp<T>
  focusVisibleTop?: TopProp<T>
  activeTop?: TopProp<T>
  disabledTop?: TopProp<T>
  placeholderTop?: TopProp<T>
}
export const top = style({
  prop: 'top',
  themeGet: getInset,
})

type RightProp<T> = SystemProp<InsetGetter<T> | CSS.Property.Right, T>
export interface RightProps<T extends ITheme = Theme> {
  right?: RightProp<T>
  motionSafeRight?: RightProp<T>
  motionReduceRight?: RightProp<T>
  firstRight?: RightProp<T>
  lastRight?: RightProp<T>
  oddRight?: RightProp<T>
  evenRight?: RightProp<T>
  visitedRight?: RightProp<T>
  checkedRight?: RightProp<T>
  focusWithinRight?: RightProp<T>
  hoverRight?: RightProp<T>
  focusRight?: RightProp<T>
  focusVisibleRight?: RightProp<T>
  activeRight?: RightProp<T>
  disabledRight?: RightProp<T>
  placeholderRight?: RightProp<T>
}
export const right = style({
  prop: 'right',
  themeGet: getInset,
})

type BottomProp<T> = SystemProp<InsetGetter<T> | CSS.Property.Bottom, T>
export interface BottomProps<T extends ITheme = Theme> {
  bottom?: BottomProp<T>
  motionSafeBottom?: BottomProp<T>
  motionReduceBottom?: BottomProp<T>
  firstBottom?: BottomProp<T>
  lastBottom?: BottomProp<T>
  oddBottom?: BottomProp<T>
  evenBottom?: BottomProp<T>
  visitedBottom?: BottomProp<T>
  checkedBottom?: BottomProp<T>
  focusWithinBottom?: BottomProp<T>
  hoverBottom?: BottomProp<T>
  focusBottom?: BottomProp<T>
  focusVisibleBottom?: BottomProp<T>
  activeBottom?: BottomProp<T>
  disabledBottom?: BottomProp<T>
  placeholderBottom?: BottomProp<T>
}
export const bottom = style({
  prop: 'bottom',
  themeGet: getInset,
})

type LeftProp<T> = SystemProp<InsetGetter<T> | CSS.Property.Left, T>
export interface LeftProps<T extends ITheme = Theme> {
  left?: LeftProp<T>
  motionSafeLeft?: LeftProp<T>
  motionReduceLeft?: LeftProp<T>
  firstLeft?: LeftProp<T>
  lastLeft?: LeftProp<T>
  oddLeft?: LeftProp<T>
  evenLeft?: LeftProp<T>
  visitedLeft?: LeftProp<T>
  checkedLeft?: LeftProp<T>
  focusWithinLeft?: LeftProp<T>
  hoverLeft?: LeftProp<T>
  focusLeft?: LeftProp<T>
  focusVisibleLeft?: LeftProp<T>
  activeLeft?: LeftProp<T>
  disabledLeft?: LeftProp<T>
  placeholderLeft?: LeftProp<T>
}
export const left = style({
  prop: 'left',
  themeGet: getInset,
})

type VisibilityProp<T> = SystemProp<CSS.Property.Visibility, T>
export interface VisibilityProps<T extends ITheme = Theme> {
  visibility?: VisibilityProp<T>
  motionSafeVisibility?: VisibilityProp<T>
  motionReduceVisibility?: VisibilityProp<T>
  firstVisibility?: VisibilityProp<T>
  lastVisibility?: VisibilityProp<T>
  oddVisibility?: VisibilityProp<T>
  evenVisibility?: VisibilityProp<T>
  visitedVisibility?: VisibilityProp<T>
  checkedVisibility?: VisibilityProp<T>
  focusWithinVisibility?: VisibilityProp<T>
  hoverVisibility?: VisibilityProp<T>
  focusVisibility?: VisibilityProp<T>
  focusVisibleVisibility?: VisibilityProp<T>
  activeVisibility?: VisibilityProp<T>
  disabledVisibility?: VisibilityProp<T>
  placeholderVisibility?: VisibilityProp<T>
}
export const visibility = style({
  prop: 'visibility',
})

type OverscrollBehaviorProp<T> = SystemProp<CSS.Property.OverscrollBehavior, T>
export interface OverscrollBehaviorProps<T extends ITheme = Theme> {
  overscrollBehavior?: OverscrollBehaviorProp<T>
  motionSafeOverscrollBehavior?: OverscrollBehaviorProp<T>
  motionReduceOverscrollBehavior?: OverscrollBehaviorProp<T>
  firstOverscrollBehavior?: OverscrollBehaviorProp<T>
  lastOverscrollBehavior?: OverscrollBehaviorProp<T>
  oddOverscrollBehavior?: OverscrollBehaviorProp<T>
  evenOverscrollBehavior?: OverscrollBehaviorProp<T>
  visitedOverscrollBehavior?: OverscrollBehaviorProp<T>
  checkedOverscrollBehavior?: OverscrollBehaviorProp<T>
  focusWithinOverscrollBehavior?: OverscrollBehaviorProp<T>
  hoverOverscrollBehavior?: OverscrollBehaviorProp<T>
  focusOverscrollBehavior?: OverscrollBehaviorProp<T>
  focusVisibleOverscrollBehavior?: OverscrollBehaviorProp<T>
  activeOverscrollBehavior?: OverscrollBehaviorProp<T>
  disabledOverscrollBehavior?: OverscrollBehaviorProp<T>
  placeholderOverscrollBehavior?: OverscrollBehaviorProp<T>
}
export const overscrollBehavior = style({
  prop: 'overscrollBehavior',
})

type ObjectFitProp<T> = SystemProp<CSS.Property.ObjectFit, T>
export interface ObjectFitProps<T extends ITheme = Theme> {
  objectFit?: ObjectFitProp<T>
  motionSafeObjectFit?: ObjectFitProp<T>
  motionReduceObjectFit?: ObjectFitProp<T>
  firstObjectFit?: ObjectFitProp<T>
  lastObjectFit?: ObjectFitProp<T>
  oddObjectFit?: ObjectFitProp<T>
  evenObjectFit?: ObjectFitProp<T>
  visitedObjectFit?: ObjectFitProp<T>
  checkedObjectFit?: ObjectFitProp<T>
  focusWithinObjectFit?: ObjectFitProp<T>
  hoverObjectFit?: ObjectFitProp<T>
  focusObjectFit?: ObjectFitProp<T>
  focusVisibleObjectFit?: ObjectFitProp<T>
  activeObjectFit?: ObjectFitProp<T>
  disabledObjectFit?: ObjectFitProp<T>
  placeholderObjectFit?: ObjectFitProp<T>
}
export const objectFit = style({
  prop: 'objectFit',
})

export type LayoutProps<T extends ITheme = Theme> = DisplayProps<T> &
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
export const layout = compose(
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
