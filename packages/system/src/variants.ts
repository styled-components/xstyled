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

export const withVariants =
  <SG extends StyleGenerator>(generator: SG) =>
  <
    TProps extends StyleGeneratorProps<SG> & {
      [Name in string]: any
    } & {
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
        : unknown) & {
        compoundVariants?: ({
          css: StyleGeneratorProps<SG>
        } & ('variants' extends keyof TProps
          ? {
              [Name in keyof TProps['variants']]?: Widen<
                keyof TProps['variants'][Name]
              >
            }
          : unknown))[]
      },
  >(
    props: TProps,
  ): CSSObject | null => {
    const result = generator(props)
    if (!obj(props.variants)) return result
    for (const variantName in props.variants) {
      const value = props[variantName]
      if (!is(value)) continue
      Object.assign(
        result,
        generator({
          theme: props.theme,
          ...props.variants[variantName][value],
        }),
      )
    }
    if (!props.compoundVariants) return result
    l1: for (let i = 0; i < props.compoundVariants.length; i++) {
      const compoundVariant = props.compoundVariants[i]
      for (const key in compoundVariant) {
        if (key === 'css') continue
        if (!props[key]) continue l1
      }
      Object.assign(
        result,
        generator({ theme: props.theme, ...compoundVariant.css }),
      )
    }
    return result
  }
