import { SystemProp, ITheme, IProps, Theme } from '../types'
import { obj } from '@xstyled/util'
import { style, createStyleGenerator, reduceStates, compose } from '../style'
import { getPercent } from './units'

type RowProp<T extends ITheme> = SystemProp<boolean, T>
export interface RowProps<T extends ITheme = Theme> {
  row?: RowProp<T>
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
      const breakpointsStyle = reduceStates(
        props,
        value,
        (v: string | number) => getColStyle(props, v),
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

export interface FlexboxGridsProps<T extends ITheme = Theme>
  extends RowProps<T>,
    ColProps<T> {}
export const flexboxGrids = compose(row, col)
