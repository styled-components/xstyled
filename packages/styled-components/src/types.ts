import type { BoxElements } from '@xstyled/core'
import type { StyleGenerator, StyleGeneratorProps, Theme } from '@xstyled/system'
import type {
  ThemedBaseStyledInterface,
  ThemedStyledFunction
} from 'styled-components'

export type BoxStyledTags<TProps extends object> = {
  [Key in keyof BoxElements]: ThemedStyledFunction<
    BoxElements[Key],
    Theme,
    TProps
  >
}

export interface XStyled<TGen extends StyleGenerator>
  extends ThemedBaseStyledInterface<Theme>,
    BoxStyledTags<StyleGeneratorProps<TGen>> {}
