import { getThemeValue, merge, warn, is, assign } from '@xstyled/util'
import { IProps } from './types'

export const variant = ({
  key = null,
  default: defaultValue,
  variants = {},
  prop = 'variant',
}: {
  key?: string | null
  default?: string | null
  variants: { [key: string]: any }
  prop?: string
}) => (props: IProps) => {
  const themeVariants = is(key) ? getThemeValue(props, key) : null
  const computedVariants = merge(assign({}, variants), themeVariants)
  const value = props[prop] !== undefined ? props[prop] : defaultValue
  const result = getThemeValue(props, value, computedVariants)
  warn(is(result), `variant "${value}" not found`)
  return result
}
