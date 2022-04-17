import { CSSObject, StyleGenerator, StyleGeneratorProps } from './types'
import { obj, is } from '@xstyled/util'

type Widen<T> = T extends number
  ? `${T}` | T
  : T extends 'true'
  ? boolean | T
  : T extends 'false'
  ? boolean | T
  : T extends `${number}`
  ? number | T
  : T

export const withVariants = <SG extends StyleGenerator>(generator: SG) => {
  const getStyle = <
    TProps extends StyleGeneratorProps<SG> & {
      variants?: {
        [Name in string]: {
          [Pair in number | string]: StyleGeneratorProps<SG>
        }
      }
    } & ('variants' extends keyof TProps
        ? {
            [Name in keyof TProps['variants']]?: Widen<
              keyof TProps['variants'][Name]
            >
          }
        : unknown),
  >(
    props: TProps,
  ): CSSObject | null => {
    const result = generator(props)
    if (!obj(props.variants)) return result
    for (const variant in props.variants) {
      // @ts-ignore
      const value = props[variant]
      if (!is(value)) continue
      Object.assign(result, getStyle(props.variants[variant][value]))
    }
    return result
  }
  return getStyle
}
