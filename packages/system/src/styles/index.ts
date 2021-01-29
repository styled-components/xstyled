import { Theme, ITheme } from '../types'
import { compose } from '../style'
import { animations, AnimationsProps } from './animations'
import { backgrounds, BackgroundsProps } from './backgrounds'
import { borders, BordersProps } from './borders'
import { effects, EffectsProps } from './effects'
import { flexboxGrids, FlexboxGridsProps } from './flexbox-grids'
import { flexboxes, FlexboxesProps } from './flexboxes'
import { grids, GridsProps } from './grids'
import { interactivity, InteractivityProps } from './interactivity'
import { layout, LayoutProps } from './layout'
import { sizing, SizingProps } from './sizing'
import { space, SpaceProps } from './space'
import { svg, SvgProps } from './svg'
import { tables, TablesProps } from './tables'
import { transforms, TransformsProps } from './transforms'
import { transitions, TransitionsProps } from './transitions'
import { typography, TypographyProps } from './typography'

export * from './animations'
export * from './backgrounds'
export * from './borders'
export * from './colors'
export * from './effects'
export * from './flexboxes'
export * from './flexbox-grids'
export * from './grids'
export * from './interactivity'
export * from './layout'
export * from './sizing'
export * from './space'
export * from './svg'
export * from './tables'
export * from './transforms'
export * from './transitions'
export * from './typography'
export * from './units'

export interface SystemProps<T extends ITheme = Theme>
  extends AnimationsProps<T>,
    BackgroundsProps<T>,
    BordersProps<T>,
    EffectsProps<T>,
    FlexboxGridsProps<T>,
    FlexboxesProps<T>,
    GridsProps<T>,
    InteractivityProps<T>,
    LayoutProps<T>,
    SizingProps<T>,
    SpaceProps<T>,
    SvgProps<T>,
    TablesProps<T>,
    TransformsProps<T>,
    TransitionsProps<T>,
    TypographyProps<T> {}

export const system = compose(
  animations,
  backgrounds,
  borders,
  effects,
  flexboxGrids,
  flexboxes,
  grids,
  interactivity,
  layout,
  sizing,
  space,
  svg,
  tables,
  transforms,
  transitions,
  typography,
)
