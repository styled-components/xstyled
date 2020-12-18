import * as CSS from 'csstype'
import { style, compose } from '../style'
import { SystemProp, ITheme, Theme } from '../types'

type BorderCollapseProp<T extends ITheme = Theme> = SystemProp<
  CSS.Property.BorderCollapse,
  T
>
export interface BorderCollapseProps<T = {}> {
  borderCollapse?: BorderCollapseProp<T>
  motionSafeBorderCollapse?: BorderCollapseProp<T>
  motionReduceBorderCollapse?: BorderCollapseProp<T>
  firstBorderCollapse?: BorderCollapseProp<T>
  lastBorderCollapse?: BorderCollapseProp<T>
  oddBorderCollapse?: BorderCollapseProp<T>
  evenBorderCollapse?: BorderCollapseProp<T>
  visitedBorderCollapse?: BorderCollapseProp<T>
  checkedBorderCollapse?: BorderCollapseProp<T>
  focusWithinBorderCollapse?: BorderCollapseProp<T>
  hoverBorderCollapse?: BorderCollapseProp<T>
  focusBorderCollapse?: BorderCollapseProp<T>
  focusVisibleBorderCollapse?: BorderCollapseProp<T>
  activeBorderCollapse?: BorderCollapseProp<T>
  disabledBorderCollapse?: BorderCollapseProp<T>
  placeholderBorderCollapse?: BorderCollapseProp<T>
}
export const borderCollapse = style({
  prop: 'borderCollapse',
})

type TableLayoutProp<T extends ITheme = Theme> = SystemProp<
  CSS.Property.TableLayout,
  T
>
export interface TableLayoutProps<T = {}> {
  tableLayout?: TableLayoutProp<T>
  motionSafeTableLayout?: TableLayoutProp<T>
  motionReduceTableLayout?: TableLayoutProp<T>
  firstTableLayout?: TableLayoutProp<T>
  lastTableLayout?: TableLayoutProp<T>
  oddTableLayout?: TableLayoutProp<T>
  evenTableLayout?: TableLayoutProp<T>
  visitedTableLayout?: TableLayoutProp<T>
  checkedTableLayout?: TableLayoutProp<T>
  focusWithinTableLayout?: TableLayoutProp<T>
  hoverTableLayout?: TableLayoutProp<T>
  focusTableLayout?: TableLayoutProp<T>
  focusVisibleTableLayout?: TableLayoutProp<T>
  activeTableLayout?: TableLayoutProp<T>
  disabledTableLayout?: TableLayoutProp<T>
  placeholderTableLayout?: TableLayoutProp<T>
}
export const tableLayout = style({
  prop: 'tableLayout',
})

export type TablesProps<T extends ITheme = Theme> = BorderCollapseProps<T> &
  TableLayoutProps<T>
export const tables = compose(borderCollapse, tableLayout)
