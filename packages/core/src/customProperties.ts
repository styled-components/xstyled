/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { obj, string, func } from '@xstyled/util'

const join = (...args: (string | undefined)[]) => args.filter(Boolean).join('.')

const toVarName = (key: string) => `--${key.replace(/\./g, '-')}`
const toVarValue = (key: string, value: string) =>
  `var(${toVarName(key)}, ${value})`

export function toCustomPropertiesReferences(
  object: any,
  parent?: string,
  theme: any = object,
) {
  const next: any = Array.isArray(object) ? [] : {}

  for (const key in object as any) {
    const value = (object as any)[key]
    const name = join(parent, key)
    if (obj(value)) {
      next[key] = toCustomPropertiesReferences(value, name, theme)
      continue
    }
    if (string(value)) {
      next[key] = toVarValue(name, value)
      continue
    }
    if (func(value)) {
      next[key] = toVarValue(name, value({ theme }))
      continue
    }
  }

  return next
}

export function toCustomPropertiesDeclarations(
  object: object,
  parent?: string,
  theme = object,
  state = { value: '' },
) {
  for (const key in object) {
    const value = (object as any)[key]
    const name = join(parent, key)
    if (obj(value)) {
      toCustomPropertiesDeclarations(value, name, theme, state)
      continue
    }
    if (string(value)) {
      state.value += `${toVarName(name)}: ${value};`
      continue
    }
    if (func(value)) {
      state.value += `${toVarName(name)}: ${value({ theme })};`
      continue
    }
  }

  return state.value
}
