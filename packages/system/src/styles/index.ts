import { compose } from '../style'
import { animations, AnimationsProps } from './animations'
import { backgrounds, BackgroundsProps } from './backgrounds'
import { borders, BordersProps } from './borders'
import { effects, EffectsProps } from './effects'
import { flexboxes, FlexBoxesProps } from './flexboxes'
import { grids, GridsProps } from './grids'
import { interactivity, InteractivityProps } from './interactivity'
import { layout, LayoutProps } from './layout'
import { positioning, PositioningProps } from './positioning'
import { sizing, SizingProps } from './sizing'
import { space, SpaceProps } from './space'
import { svg, SvgProps } from './svg'
import { tables, TablesProps } from './tables'
import { transforms, TransformsProps } from './transforms'
import { transitions, TransitionsProps } from './transitions'
import { typography, TypographyProps } from './typography'
import { xgrids, XGridsProps } from './xgrids'

export * from './animations'
export * from './backgrounds'
export * from './borders'
export * from './colors'
export * from './effects'
export * from './flexboxes'
export * from './grids'
export * from './interactivity'
export * from './layout'
export * from './positioning'
export * from './sizing'
export * from './space'
export * from './svg'
export * from './tables'
export * from './transforms'
export * from './transitions'
export * from './typography'
export * from './units'
export * from './xgrids'

export type SystemProps<T = {}> = AnimationsProps<T> &
  BackgroundsProps<T> &
  BordersProps<T> &
  EffectsProps<T> &
  FlexBoxesProps<T> &
  GridsProps<T> &
  InteractivityProps<T> &
  LayoutProps<T> &
  PositioningProps<T> &
  SizingProps<T> &
  SpaceProps<T> &
  SvgProps<T> &
  TablesProps<T> &
  TransformsProps<T> &
  TransitionsProps<T> &
  TypographyProps<T> &
  XGridsProps<T>
export const system = compose<SystemProps>(
  animations,
  backgrounds,
  borders,
  effects,
  flexboxes,
  grids,
  interactivity,
  layout,
  positioning,
  sizing,
  space,
  svg,
  tables,
  transforms,
  transitions,
  typography,
  xgrids,
)
