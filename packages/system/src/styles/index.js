import { compose } from '../style'
import { backgrounds } from './backgrounds'
import { basics } from './basics'
import { borders } from './borders'
import { layout } from './layout'
import { flexboxes } from './flexboxes'
import { grids } from './grids'
import { positioning } from './positioning'
import { space } from './space'
import { typography } from './typography'

export * from './backgrounds'
export * from './basics'
export * from './borders'
export * from './flexboxes'
export * from './grids'
export * from './layout'
export * from './positioning'
export * from './space'
export * from './typography'

export const system = compose(
  backgrounds,
  basics,
  borders,
  flexboxes,
  grids,
  layout,
  positioning,
  space,
  typography,
)
