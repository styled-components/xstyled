import {
  getSpace,
  getColor,
  getRadius,
  getBorder,
  getBorderWidth,
  getBorderStyle,
  getShadow,
  getSize,
  getZIndex,
  getFont,
  getFontSize,
  getLineHeight,
  getFontWeight,
  getLetterSpacing,
  getTransition,
} from '@xstyled/system'

const getNumber = transform => value => {
  const num = Number(value)
  return transform(Number.isNaN(num) ? value : num)
}

const SPACES = /\s+/
const getMultiValues = transform => value => {
  const values = value.split(SPACES)
  return p => values.map(value => transform(value)(p)).join(' ')
}

const getNumberSpace = getNumber(getSpace)
const getMultiNumberSpace = getMultiValues(getNumberSpace)

const getNumberBorder = getNumber(getBorder)

const getNumberBorderWidth = getNumber(getBorderWidth)
const getMultiNumberBorderWidth = getMultiValues(getNumberBorderWidth)

const getNumberSize = getNumber(getSize)

const getMultiBorderStyle = getMultiValues(getBorderStyle)

export const propGetters = {
  // getSpace
  margin: getMultiNumberSpace,
  'margin-top': getNumberSpace,
  'margin-bottom': getNumberSpace,
  'margin-left': getNumberSpace,
  'margin-right': getNumberSpace,
  padding: getMultiNumberSpace,
  'padding-top': getNumberSpace,
  'padding-bottom': getNumberSpace,
  'padding-left': getNumberSpace,
  'padding-right': getNumberSpace,
  'grid-gap': getMultiNumberSpace,
  'grid-row-gap': getNumberSpace,

  // getColor
  color: getColor,
  'background-color': getColor,
  'border-color': getColor,
  'border-top-color': getColor,
  'border-right-color': getColor,
  'border-bottom-color': getColor,
  'border-left-color': getColor,

  // getRadius
  'border-radius': getMultiValues(getNumber(getRadius)),

  // getBorder
  border: getNumberBorder,
  'border-top': getNumberBorder,
  'border-right': getNumberBorder,
  'border-bottom': getNumberBorder,
  'border-left': getNumberBorder,

  // getBorderWidth
  'border-width': getMultiNumberBorderWidth,
  'boder-top-width': getNumberBorderWidth,
  'boder-right-width': getNumberBorderWidth,
  'boder-bottom-width': getNumberBorderWidth,
  'boder-left-width': getNumberBorderWidth,

  // getBorderStyle
  'border-style': getMultiBorderStyle,
  'boder-top-style': getBorderStyle,
  'boder-right-style': getBorderStyle,
  'boder-bottom-style': getBorderStyle,
  'boder-left-style': getBorderStyle,

  // getShadow
  'box-shadow': getShadow,

  // getSize
  width: getNumberSize,
  height: getNumberSize,
  'max-width': getNumberSize,
  'max-height': getNumberSize,
  'min-width': getNumberSize,
  'min-height': getNumberSize,

  // getZIndex
  'z-index': getZIndex,

  // getFont
  'font-family': getFont,

  // getFontSize
  'font-size': getFontSize,

  // getLineHeight
  'line-height': getLineHeight,

  // getFontWeight
  'font-weight': getFontWeight,

  // getLetterSpacing
  'letter-spacing': getNumber(getLetterSpacing),

  // getTransition
  transition: getTransition,
}
