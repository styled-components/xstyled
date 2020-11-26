import * as CSS from 'csstype'
import { SystemProperty } from '../types'
import { style, compose } from '../style'
import { getSpace, SpaceGetter } from './space'

export interface GapProps<T = {}> {
  gap?: SystemProperty<SpaceGetter<T> | CSS.Property.Gap, T>
}
export const gap = style<GapProps>({
  prop: 'gap',
  themeGet: getSpace,
})

export interface ColumnGapProps<T = {}> {
  columnGap?: SystemProperty<SpaceGetter<T> | CSS.Property.ColumnGap, T>
}
export const columnGap = style<ColumnGapProps>({
  prop: 'columnGap',
  themeGet: getSpace,
})

export interface RowGapProps<T = {}> {
  rowGap?: SystemProperty<SpaceGetter<T> | CSS.Property.RowGap, T>
}
export const rowGap = style<RowGapProps>({
  prop: 'rowGap',
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

export type GridsProps<T = {}> = GapProps<T> &
  ColumnGapProps<T> &
  RowGapProps<T> &
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
  gap,
  columnGap,
  rowGap,
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
