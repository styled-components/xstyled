import type { ElementType } from 'react'
import { StyleGenerator } from '@xstyled/system'

export const createShouldForwardProp = (
  generator: StyleGenerator,
): ((
  prop: string,
  defaultValidatorFn: (prop: string) => boolean,
  elementToBeCreated: ElementType,
) => boolean) => {
  const propSet = new Set<string>(generator.meta.props)

  const shouldForwardProp = (
    prop: string,
    defaultValidatorFn: (prop: string) => boolean,
    elementToBeCreated?: ElementType,
  ) => {
    if (propSet.has(prop)) {
      return false
    }
    if (typeof elementToBeCreated === 'string') {
      // We must test elementToBeCreated so we can pass through props for <x.div
      // as={Component} />. However elementToBeCreated isn't available until
      // styled-components 5.2.4 or 6, and in the meantime will be undefined.
      // This means that HTML elements could get unwanted props, but ultimately
      // this is a bug in the caller, because why are they passing unwanted
      // props?
      return defaultValidatorFn(prop)
    }
    return true
  }

  return shouldForwardProp
}
