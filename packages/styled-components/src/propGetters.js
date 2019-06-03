import {
  getSpace,
  getColor,
  getRadius,
  getBorder,
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
const getNumberSize = getNumber(getSize)

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
  'border-radius': getNumber(getRadius),

  // getBorder
  border: getNumberBorder,
  'border-top': getNumberBorder,
  'border-right': getNumberBorder,
  'border-bottom': getNumberBorder,
  'border-left': getNumberBorder,

  // getBorderStyle
  'border-style': getBorderStyle,

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
