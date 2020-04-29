/* eslint-disable no-underscore-dangle */
/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { obj, string, func } from '@xstyled/util'

const join = (...args) => args.filter(Boolean).join('.')

const toVarName = (key) => `--${key.replace(/\./g, '-')}`
const toVarValue = (key, value) => `var(${toVarName(key)}, ${value})`

export function toCustomPropertiesReferences(object, parent, theme = object) {
  const next = Array.isArray(object) ? [] : {}

  for (const key in object) {
    const value = object[key]
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
  object,
  parent,
  theme = object,
  state = { value: '' },
) {
  for (const key in object) {
    const value = object[key]
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
