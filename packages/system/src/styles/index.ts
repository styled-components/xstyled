import { compose } from '../style'
import { backgrounds, BackgroundsProps } from './backgrounds'
import { basics, BasicsProps } from './basics'
import { borders, BordersProps } from './borders'
import { effects, EffectsProps } from './effects'
import { flexboxes, FlexBoxesProps } from './flexboxes'
import { grids, GridsProps } from './grids'
import { layout, LayoutProps } from './layout'
import { positioning, PositioningProps } from './positioning'
import { sizing, SizingProps } from './sizing'
import { space, SpaceProps } from './space'
import { svg, SvgProps } from './svg'
import { tables, TablesProps } from './tables'
import { typography, TypographyProps } from './typography'
import { xgrids, XGridsProps } from './xgrids'

export * from './backgrounds'
export * from './basics'
export * from './borders'
export * from './effects'
export * from './flexboxes'
export * from './grids'
export * from './layout'
export * from './positioning'
export * from './sizing'
export * from './space'
export * from './svg'
export * from './tables'
export * from './typography'
export * from './xgrids'

export type SystemProps<T = {}> = BackgroundsProps<T> &
  BasicsProps<T> &
  BordersProps<T> &
  EffectsProps<T> &
  FlexBoxesProps<T> &
  GridsProps<T> &
  LayoutProps<T> &
  PositioningProps<T> &
  SizingProps<T> &
  SpaceProps<T> &
  SvgProps<T> &
  TablesProps<T> &
  TypographyProps<T> &
  XGridsProps<T>
export const system = compose<SystemProps>(
  backgrounds,
  basics,
  borders,
  effects,
  flexboxes,
  grids,
  layout,
  positioning,
  sizing,
  space,
  svg,
  tables,
  typography,
  xgrids,
)
