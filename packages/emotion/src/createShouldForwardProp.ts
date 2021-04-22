import { StyleGenerator } from '@xstyled/system'

export const createShouldForwardProp = (
  generator: StyleGenerator,
): ((prop: string) => boolean) => {
  const propSet = new Set<string>(generator.meta.props)

  const shouldForwardProp = (prop: string) =>
    prop !== 'as' && !propSet.has(prop)

  return shouldForwardProp
}
