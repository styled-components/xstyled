import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProp, ITheme, Theme } from '../types'

export interface BorderCollapseProps<T extends ITheme = Theme> {
  borderCollapse?: SystemProp<CSS.Property.BorderCollapse, T>
}
export const borderCollapse = style<BorderCollapseProps>({
  prop: 'borderCollapse',
})

export interface TableLayoutProps<T extends ITheme = Theme> {
  tableLayout?: SystemProp<CSS.Property.TableLayout, T>
}
export const tableLayout = style<TableLayoutProps>({
  prop: 'tableLayout',
})

export interface TablesProps<T extends ITheme = Theme>
  extends BorderCollapseProps<T>,
    TableLayoutProps<T> {}
export const tables = compose<TablesProps>(borderCollapse, tableLayout)
