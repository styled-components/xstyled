import * as CSS from 'csstype'
import { SystemProperty } from '../types'
import { style, compose } from '../style'
import { getSpace, SpaceGetter } from './space'

export interface GridGapProps<T = {}> {
  gridGap?: SystemProperty<SpaceGetter<T> | CSS.Property.GridGap, T>
}
export const gridGap = style<GridGapProps>({
  prop: 'gridGap',
  themeGet: getSpace,
})

export interface GridColumnGapProps<T = {}> {
  gridColumnGap?: SystemProperty<SpaceGetter<T> | CSS.Property.GridColumnGap, T>
}
export const gridColumnGap = style<GridColumnGapProps>({
  prop: 'gridColumnGap',
  themeGet: getSpace,
})

export interface GridRowGapProps<T = {}> {
  gridRowGap?: SystemProperty<SpaceGetter<T> | CSS.Property.GridRowGap, T>
}
export const gridRowGap = style<GridRowGapProps>({
  prop: 'gridRowGap',
  themeGet: getSpace,
})

export interface GridColumnProps<T = {}> {
  gridColumn?: SystemProperty<CSS.Property.GridColumn, T>
}
export const gridColumn = style<GridColumnProps>({ prop: 'gridColumn' })

export interface GridRowProps<T = {}> {
  gridRow?: SystemProperty<CSS.Property.GridRow, T>
}
export const gridRow = style<GridRowProps>({ prop: 'gridRow' })

export interface GridAutoFlowProps<T = {}> {
  gridAutoFlow?: SystemProperty<CSS.Property.GridAutoFlow, T>
}
export const gridAutoFlow = style<GridAutoFlowProps>({ prop: 'gridAutoFlow' })

export interface GridAutoColumnsProps<T = {}> {
  gridAutoColumns?: SystemProperty<CSS.Property.GridAutoColumns, T>
}
export const gridAutoColumns = style<GridAutoColumnsProps>({
  prop: 'gridAutoColumns',
})

export interface GridAutoRowsProps<T = {}> {
  gridAutoRows?: SystemProperty<CSS.Property.GridAutoRows, T>
}
export const gridAutoRows = style<GridAutoRowsProps>({ prop: 'gridAutoRows' })

export interface GridTemplateColumnsProps<T = {}> {
  gridTemplateColumns?: SystemProperty<CSS.Property.GridTemplateColumns, T>
}
export const gridTemplateColumns = style<GridTemplateColumnsProps>({
  prop: 'gridTemplateColumns',
})

export interface GridTemplateRowsProps<T = {}> {
  gridTemplateRows?: SystemProperty<CSS.Property.GridTemplateRows, T>
}
export const gridTemplateRows = style<GridTemplateRowsProps>({
  prop: 'gridTemplateRows',
})

export interface GridTemplateAreasProps<T = {}> {
  gridTemplateAreas?: SystemProperty<CSS.Property.GridTemplateAreas, T>
}
export const gridTemplateAreas = style<GridTemplateAreasProps>({
  prop: 'gridTemplateAreas',
})

export interface GridAreaProps<T = {}> {
  gridArea?: SystemProperty<CSS.Property.GridArea, T>
}
export const gridArea = style<GridAreaProps>({ prop: 'gridArea' })

export type GridsProps<T = {}> = GridGapProps<T> &
  GridColumnGapProps<T> &
  GridRowGapProps<T> &
  GridColumnProps<T> &
  GridRowProps<T> &
  GridAutoFlowProps<T> &
  GridAutoColumnsProps<T> &
  GridAutoRowsProps<T> &
  GridTemplateColumnsProps<T> &
  GridTemplateRowsProps<T> &
  GridTemplateAreasProps<T> &
  GridAreaProps<T>
export const grids = compose<GridsProps>(
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
)
