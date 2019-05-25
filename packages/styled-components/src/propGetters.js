import {
  getSpace,
  getColor,
  getRadius,
  getBorder,
  getBorderStyle,
  getShadow,
  getWidth,
  getHeight,
  getMaxWidth,
  getMaxHeight,
  getMinWidth,
  getMinHeight,
  getZIndex,
  getFont,
  getFontSize,
  getLineHeight,
  getFontWeight,
  getLetterSpacing,
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

const getSpaceNumber = getNumber(getSpace)
const getMultiSpaceNumber = getMultiValues(getSpaceNumber)

const getBorderNumber = getNumber(getBorder)

export const propGetters = {
  // getSpace
  margin: getMultiSpaceNumber,
  'margin-top': getSpaceNumber,
  'margin-bottom': getSpaceNumber,
  'margin-left': getSpaceNumber,
  'margin-right': getSpaceNumber,
  padding: getMultiSpaceNumber,
  'padding-top': getSpaceNumber,
  'padding-bottom': getSpaceNumber,
  'padding-left': getSpaceNumber,
  'padding-right': getSpaceNumber,
  'grid-gap': getMultiSpaceNumber,
  'grid-row-gap': getSpaceNumber,

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
  border: getBorderNumber,
  'border-top': getBorderNumber,
  'border-right': getBorderNumber,
  'border-bottom': getBorderNumber,
  'border-left': getBorderNumber,

  // getBorderStyle
  'border-style': getBorderStyle,

  // getShadow
  'box-shadow': getShadow,

  // getWidth
  width: getNumber(getWidth),

  // getHeight
  height: getNumber(getHeight),

  // getMaxWidth
  'max-width': getNumber(getMaxWidth),

  // getMaxHeight
  'max-height': getNumber(getMaxHeight),

  // getMinWidth
  'min-width': getNumber(getMinWidth),

  // getMinHeight
  'min-height': getNumber(getMinHeight),

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
}
