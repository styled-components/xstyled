import { compose } from '../style'
import { backgrounds, BackgroundsProps } from './backgrounds'
import { basics, BasicsProps } from './basics'
import { borders, BordersProps } from './borders'
import { layout, LayoutProps } from './layout'
import { flexboxes, FlexBoxesProps } from './flexboxes'
import { grids, GridsProps } from './grids'
import { positioning, PositioningProps } from './positioning'
import { shadows, ShadowsProps } from './shadows'
import { sizing, SizingProps } from './sizing'
import { space, SpaceProps } from './space'
import { svg, SvgProps } from './svg'
import { tables, TablesProps } from './tables'
import { typography, TypographyProps } from './typography'
import { xgrids, XGridsProps } from './xgrids'

export * from './backgrounds'
export * from './basics'
export * from './borders'
export * from './flexboxes'
export * from './grids'
export * from './layout'
export * from './positioning'
export * from './shadows'
export * from './sizing'
export * from './space'
export * from './svg'
export * from './tables'
export * from './typography'
export * from './xgrids'

export type SystemProps<T = {}> = BackgroundsProps<T> &
  BasicsProps<T> &
  BordersProps<T> &
  FlexBoxesProps<T> &
  GridsProps<T> &
  LayoutProps<T> &
  PositioningProps<T> &
  ShadowsProps<T> &
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
  flexboxes,
  grids,
  layout,
  positioning,
  shadows,
  sizing,
  space,
  svg,
  tables,
  typography,
  xgrids,
)
