import { useMemo } from 'react'
import { ThemeGetter, ThemeGetterType, CSSScalar } from '@xstyled/system'

export const createUseGetter =
  <T extends ThemeGetter>(getter: T, useTheme: () => object) =>
  (value: ThemeGetterType<T>, defaultValue?: CSSScalar): CSSScalar => {
    const theme = useTheme()
    return useMemo(
      () => getter(value, defaultValue)({ theme }),
      [value, defaultValue, theme],
    )
  }
