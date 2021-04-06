import { useMemo } from 'react'
import { ThemeGetter, ThemeGetterType, StyleScalarValue } from '@xstyled/system'

export const createUseGetter = <T extends ThemeGetter>(
  getter: T,
  useTheme: () => object,
) => (
  value: ThemeGetterType<T>,
  defaultValue?: StyleScalarValue,
): StyleScalarValue => {
  const theme = useTheme()
  return useMemo(() => getter(value, defaultValue)({ theme }), [
    value,
    defaultValue,
    theme,
  ])
}
