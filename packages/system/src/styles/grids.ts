import * as CSS from 'csstype'
import { SystemProp, ITheme, Theme, ThemeNamespaceValue } from '../types'
import { style, compose } from '../style'
import { getSpace, ThemeSpace } from './space'

export interface GapProps<T extends ITheme = Theme> {
  gap?: SystemProp<ThemeSpace<T> | CSS.Property.Gap, T>
}
export const gap = style<GapProps>({
  prop: 'gap',
  themeGet: getSpace,
})

export interface ColumnGapProps<T extends ITheme = Theme> {
  columnGap?: SystemProp<ThemeSpace<T> | CSS.Property.ColumnGap, T>
}
export const columnGap = style<ColumnGapProps>({
  prop: 'columnGap',
  themeGet: getSpace,
})

export interface RowGapProps<T extends ITheme = Theme> {
  rowGap?: SystemProp<ThemeSpace<T> | CSS.Property.RowGap, T>
}
export const rowGap = style<RowGapProps>({
  prop: 'rowGap',
  themeGet: getSpace,
})

export interface GridColumnProps<T extends ITheme = Theme> {
  gridColumn?: SystemProp<CSS.Property.GridColumn, T>
}
export const gridColumn = style<GridColumnProps>({
  prop: 'gridColumn',
})

export interface GridRowProps<T extends ITheme = Theme> {
  gridRow?: SystemProp<CSS.Property.GridRow, T>
}
export const gridRow = style<GridRowProps>({
  prop: 'gridRow',
})

export interface GridAutoFlowProps<T extends ITheme = Theme> {
  gridAutoFlow?: SystemProp<CSS.Property.GridAutoFlow, T>
}
export const gridAutoFlow = style<GridAutoFlowProps>({
  prop: 'gridAutoFlow',
})

export interface GridAutoColumnsProps<T extends ITheme = Theme> {
  gridAutoColumns?: SystemProp<CSS.Property.GridAutoColumns, T>
}
export const gridAutoColumns = style<GridAutoColumnsProps>({
  prop: 'gridAutoColumns',
})

export interface GridAutoRowsProps<T extends ITheme = Theme> {
  gridAutoRows?: SystemProp<CSS.Property.GridAutoRows, T>
}
export const gridAutoRows = style<GridAutoRowsProps>({
  prop: 'gridAutoRows',
})

export interface GridTemplateColumnsProps<T extends ITheme = Theme> {
  gridTemplateColumns?: SystemProp<
    | ThemeNamespaceValue<'gridTemplateColumns', T>
    | CSS.Property.GridTemplateColumns,
    T
  >
}
export const gridTemplateColumns = style<GridTemplateColumnsProps>({
  prop: 'gridTemplateColumns',
  key: 'gridTemplateColumns',
})

export interface GridTemplateRowsProps<T extends ITheme = Theme> {
  gridTemplateRows?: SystemProp<
    ThemeNamespaceValue<'gridTemplateRows', T> | CSS.Property.GridTemplateRows,
    T
  >
}
export const gridTemplateRows = style<GridTemplateRowsProps>({
  prop: 'gridTemplateRows',
  key: 'gridTemplateRows',
})

export interface GridTemplateAreasProps<T extends ITheme = Theme> {
  gridTemplateAreas?: SystemProp<CSS.Property.GridTemplateAreas, T>
}
export const gridTemplateAreas = style<GridTemplateAreasProps>({
  prop: 'gridTemplateAreas',
})

export interface GridAreaProps<T extends ITheme = Theme> {
  gridArea?: SystemProp<CSS.Property.GridArea, T>
}
export const gridArea = style<GridAreaProps>({
  prop: 'gridArea',
})

export interface GridsProps<T extends ITheme = Theme>
  extends GapProps<T>,
    ColumnGapProps<T>,
    RowGapProps<T>,
    GridColumnProps<T>,
    GridRowProps<T>,
    GridAutoFlowProps<T>,
    GridAutoColumnsProps<T>,
    GridAutoRowsProps<T>,
    GridTemplateColumnsProps<T>,
    GridTemplateRowsProps<T>,
    GridTemplateAreasProps<T>,
    GridAreaProps<T> {}
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
