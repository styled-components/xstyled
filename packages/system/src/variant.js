import { getThemeValue, merge, warn, is } from './util'

export const variant = ({
  key = null,
  default: defaultValue,
  variants = {},
  prop = 'variant',
}) => props => {
  const themeVariants = is(key) ? getThemeValue(props, key) : null
  const computedVariants = merge(variants, themeVariants)
  const value = props[prop] !== undefined ? props[prop] : defaultValue
  const result = getThemeValue(props, value, computedVariants)
  warn(is(result), `variant "${value}" not found`)
  return result
}
