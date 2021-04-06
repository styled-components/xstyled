import { SystemProp, ITheme, Props, Theme } from '../types'
import { obj, is } from '@xstyled/util'
import { style, createStyleGenerator, reduceVariants, compose } from '../style'
import { getPercent } from './units'

export interface RowProps<T extends ITheme = Theme> {
  row?: SystemProp<boolean, T>
}
export const row = style<RowProps>({
  prop: 'row',
  css: () => ({
    boxSizing: 'border-box',
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
  }),
})

function getColStyle(props: Props, size: string | number | true | undefined) {
  if (!is(size)) return null

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

export interface ColProps<T extends ITheme = Theme> {
  col?: SystemProp<true | 'auto' | string | number, T>
}
export const col = createStyleGenerator<ColProps>(
  (props) => {
    const value = props.col
    const common = {
      boxSizing: 'border-box',
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: '100%',
    }

    if (obj(value)) {
      const breakpointsStyle = reduceVariants(
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
export const flexboxGrids = compose<FlexboxGridsProps>(row, col)
