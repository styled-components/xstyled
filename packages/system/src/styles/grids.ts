import * as CSS from 'csstype'
import { SystemProp, ITheme, Theme, VariantsType } from '../types'
import { style, compose } from '../style'
import { getSpace, SpaceGetter } from './space'

type GapProp<T extends ITheme> = SystemProp<
  SpaceGetter<T> | CSS.Property.Gap,
  T
>
export interface GapProps<T extends ITheme = Theme> {
  gap?: GapProp<T>
}
export const gap = style({
  prop: 'gap',
  themeGet: getSpace,
})

type ColumnGapProp<T extends ITheme> = SystemProp<
  SpaceGetter<T> | CSS.Property.ColumnGap,
  T
>
export interface ColumnGapProps<T extends ITheme = Theme> {
  columnGap?: ColumnGapProp<T>
}
export const columnGap = style({
  prop: 'columnGap',
  themeGet: getSpace,
})

type RowGapProp<T extends ITheme> = SystemProp<
  SpaceGetter<T> | CSS.Property.RowGap,
  T
>
export interface RowGapProps<T extends ITheme = Theme> {
  rowGap?: RowGapProp<T>
}
export const rowGap = style({
  prop: 'rowGap',
  themeGet: getSpace,
})

type GridColumnProp<T extends ITheme> = SystemProp<CSS.Property.GridColumn, T>
export interface GridColumnProps<T extends ITheme = Theme> {
  gridColumn?: GridColumnProp<T>
}
export const gridColumn = style({ prop: 'gridColumn' })

type GridRowProp<T extends ITheme> = SystemProp<CSS.Property.GridRow, T>
export interface GridRowProps<T extends ITheme = Theme> {
  gridRow?: GridRowProp<T>
}
export const gridRow = style({ prop: 'gridRow' })

type GridAutoFlowProp<T extends ITheme> = SystemProp<
  CSS.Property.GridAutoFlow,
  T
>
export interface GridAutoFlowProps<T extends ITheme = Theme> {
  gridAutoFlow?: GridAutoFlowProp<T>
}
export const gridAutoFlow = style({ prop: 'gridAutoFlow' })

type GridAutoColumnsProp<T extends ITheme> = SystemProp<
  CSS.Property.GridAutoColumns,
  T
>
export interface GridAutoColumnsProps<T extends ITheme = Theme> {
  gridAutoColumns?: GridAutoColumnsProp<T>
}
export const gridAutoColumns = style({
  prop: 'gridAutoColumns',
})

type GridAutoRowsProp<T extends ITheme> = SystemProp<
  CSS.Property.GridAutoRows,
  T
>
export interface GridAutoRowsProps<T extends ITheme = Theme> {
  gridAutoRows?: GridAutoRowsProp<T>
}
export const gridAutoRows = style({ prop: 'gridAutoRows' })

type GridTemplateColumnsProp<T extends ITheme> = SystemProp<
  VariantsType<T['gridTemplateColumns']> | CSS.Property.GridTemplateColumns,
  T
>
export interface GridTemplateColumnsProps<T extends ITheme = Theme> {
  gridTemplateColumns?: GridTemplateColumnsProp<T>
}
export const gridTemplateColumns = style({
  prop: 'gridTemplateColumns',
  key: 'gridTemplateColumns',
})

type GridTemplateRowsProp<T extends ITheme> = SystemProp<
  VariantsType<T['gridTemplateRows']> | CSS.Property.GridTemplateRows,
  T
>
export interface GridTemplateRowsProps<T extends ITheme = Theme> {
  gridTemplateRows?: GridTemplateRowsProp<T>
}
export const gridTemplateRows = style({
  prop: 'gridTemplateRows',
  key: 'gridTemplateRows',
})

type GridTemplateAreasProp<T extends ITheme> = SystemProp<
  CSS.Property.GridTemplateAreas,
  T
>
export interface GridTemplateAreasProps<T extends ITheme = Theme> {
  gridTemplateAreas?: GridTemplateAreasProp<T>
}
export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
})

type GridAreaProp<T extends ITheme> = SystemProp<CSS.Property.GridArea, T>
export interface GridAreaProps<T extends ITheme = Theme> {
  gridArea?: GridAreaProp<T>
}
export const gridArea = style({ prop: 'gridArea' })

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
export const grids = compose(
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
