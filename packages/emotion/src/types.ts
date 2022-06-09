import type { CreateStyledComponent, CreateStyled } from '@emotion/styled'
import type { Theme } from '@emotion/react'
import type { BoxElements } from '@xstyled/core'
import type { StyleGenerator, StyleGeneratorProps } from '@xstyled/system'

export type BoxStyledTags<TProps extends object> = {
  [Tag in keyof BoxElements]: CreateStyledComponent<
    TProps & { as?: React.ElementType; theme?: Theme },
    JSX.IntrinsicElements[BoxElements[Tag]]
  >
}

export interface XStyled<TGen extends StyleGenerator>
  extends CreateStyled,
    BoxStyledTags<StyleGeneratorProps<TGen>> {}
