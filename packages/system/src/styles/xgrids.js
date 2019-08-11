import { obj } from '@xstyled/util'
import { createStyleGenerator, reduceBreakpoints, compose } from '../style'
import { getPercent } from './basics'

export const row = createStyleGenerator(
  () => ({
    boxSizing: 'border-box',
    flexGrow: 1,
    flexWrap: 'wrap',
    display: 'flex',
  }),
  ['row'],
)

function getColStyle(props, size) {
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

export const col = createStyleGenerator(
  props => {
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
        breakpointValue => getColStyle(props, breakpointValue),
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

export const xgrids = compose(
  row,
  col,
)
