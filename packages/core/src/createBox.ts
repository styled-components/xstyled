import { system } from '@xstyled/system'

export function createBox(): (string | typeof system)[] {
  return [`&&{`, system, `}`]
}
createBox.meta = system.meta
