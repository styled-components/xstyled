import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProp, ITheme, Theme } from '../types'

type BorderCollapseProp<T extends ITheme = Theme> = SystemProp<
  CSS.Property.BorderCollapse,
  T
>
export interface BorderCollapseProps<T extends ITheme = Theme> {
  borderCollapse?: BorderCollapseProp<T>
}
export const borderCollapse = style({
  prop: 'borderCollapse',
})

type TableLayoutProp<T extends ITheme = Theme> = SystemProp<
  CSS.Property.TableLayout,
  T
>
export interface TableLayoutProps<T extends ITheme = Theme> {
  tableLayout?: TableLayoutProp<T>
}
export const tableLayout = style({
  prop: 'tableLayout',
})

export interface TablesProps<T extends ITheme = Theme>
  extends BorderCollapseProps<T>,
    TableLayoutProps<T> {}
export const tables = compose(borderCollapse, tableLayout)
