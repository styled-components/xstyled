import { SystemProp, ITheme, IProps, Theme } from '../types'
import { obj } from '@xstyled/util'
import {
  style,
  createStyleGenerator,
  reduceBreakpoints,
  compose,
} from '../style'
import { getPercent } from './units'

type RowProp<T extends ITheme> = SystemProp<boolean, T>
export interface RowProps<T extends ITheme = Theme> {
  row?: RowProp<T>
  motionSafeRow?: RowProp<T>
  motionReduceRow?: RowProp<T>
  firstRow?: RowProp<T>
  lastRow?: RowProp<T>
  oddRow?: RowProp<T>
  evenRow?: RowProp<T>
  visitedRow?: RowProp<T>
  checkedRow?: RowProp<T>
  focusWithinRow?: RowProp<T>
  hoverRow?: RowProp<T>
  focusRow?: RowProp<T>
  focusVisibleRow?: RowProp<T>
  activeRow?: RowProp<T>
  disabledRow?: RowProp<T>
  placeholderRow?: RowProp<T>
}
export const row = style({
  prop: 'row',
  cssProperty: () => ({
    boxSizing: 'border-box',
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
  }),
})

function getColStyle(props: IProps, size: any) {
  if (size === true) {
    return {
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
    }
  }

  if (size === 'auto') {
    return {
      flex: `0 0 auto`,
      maxWidth: 'none',
      width: 'auto',
    }
  }

  const sizeWidth = getPercent(size)(props)

  return {
    flex: `0 0 ${sizeWidth}`,
    maxWidth: sizeWidth,
  }
}

type ColProp<T extends ITheme> = SystemProp<true | 'auto' | string | number, T>
export interface ColProps<T extends ITheme = Theme> {
  col?: ColProp<T>
  motionSafeCol?: ColProp<T>
  motionReduceCol?: ColProp<T>
  firstCol?: ColProp<T>
  lastCol?: ColProp<T>
  oddCol?: ColProp<T>
  evenCol?: ColProp<T>
  visitedCol?: ColProp<T>
  checkedCol?: ColProp<T>
  focusWithinCol?: ColProp<T>
  hoverCol?: ColProp<T>
  focusCol?: ColProp<T>
  focusVisibleCol?: ColProp<T>
  activeCol?: ColProp<T>
  disabledCol?: ColProp<T>
  placeholderCol?: ColProp<T>
}
export const col = createStyleGenerator(
  (props) => {
    const value = props.col
    const common = {
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
    }

    if (obj(value)) {
      const breakpointsStyle = reduceBreakpoints(
        props,
        value,
        (breakpointValue: string | number) =>
          getColStyle(props, breakpointValue),
      )

      return {
        ...common,
        ...breakpointsStyle,
      }
    }

    return {
      ...common,
      ...getColStyle(props, value),
    }
  },
  ['col'],
)

export type FlexboxGridsProps<T extends ITheme = Theme> = RowProps<T> &
  ColProps<T>
export const flexboxGrids = compose(row, col)
