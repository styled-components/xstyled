import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProperty } from '../types'

export interface BorderCollapseProps<T = {}> {
  borderCollapse?: SystemProperty<CSS.Property.BorderCollapse, T>
}
export const borderCollapse = style<BorderCollapseProps>({
  prop: 'borderCollapse',
})

export interface TableLayoutProps<T = {}> {
  tableLayout?: SystemProperty<CSS.Property.TableLayout, T>
}
export const tableLayout = style<TableLayoutProps>({
  prop: 'tableLayout',
})

export type TablesProps<T = {}> = BorderCollapseProps<T> & TableLayoutProps<T>
export const tables = compose<TablesProps>(borderCollapse, tableLayout)
