import { SystemProperty } from '../types'
import { obj } from '@xstyled/util'
import {
  style,
  createStyleGenerator,
  reduceBreakpoints,
  compose,
} from '../style'
import { getPercent } from './units'
import { Props } from '../types'

export interface RowProps<T = {}> {
  row?: SystemProperty<boolean, T>
}
export const row = style<RowProps>({
  prop: 'row',
  cssProperty: () => ({
    boxSizing: 'border-box',
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
  }),
})

function getColStyle(props: Props, size: any) {
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

export interface ColProps<T = {}> {
  col?: SystemProperty<true | 'auto' | string | number, T>
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

export type FlexboxGridsProps<T = {}> = RowProps<T> & ColProps<T>
export const flexboxGrids = compose<FlexboxGridsProps>(row, col)
