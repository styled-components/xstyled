import { obj, string, func, cascade } from '@xstyled/util'
import { ITheme } from '@xstyled/system'

const join = (...args: (string | undefined)[]): string =>
  args.filter(Boolean).join('.')

const toVarName = (key: string): string => `--${key.replace(/\./g, '-')}`
const toVarValue = (key: string, value: string): string =>
  `var(${toVarName(key)}, ${value})`
const toProp = (key: string, value: string): string => `${key}: ${value};`

export function toCustomPropertiesReferences<
  T extends Record<string | number, unknown>
>(
  values: T,
  theme?: ITheme,
  keys: string[] = Object.keys(values),
  parent?: string,
): Record<string | number, unknown> {
  const next: Record<string | number, unknown> = Array.isArray(values)
    ? ([] as Record<number, string>)
    : ({} as Record<string, string>)

  for (const i in keys) {
    const key = keys[i]
    const value = values[key]
    const name = join(parent, key)
    if (obj(value)) {
      next[key] = toCustomPropertiesReferences(
        value as { [key: string]: unknown },
        theme,
        Object.keys(value),
        name,
      )
      continue
    }
    if (string(value)) {
      next[key] = toVarValue(name, value)
      continue
    }
    if (func(value)) {
      next[key] = toVarValue(name, cascade(value, { theme }))
      continue
    }
  }

  return next
}

export function toCustomPropertiesDeclarations(
  values: { [key: string]: unknown },
  theme?: ITheme,
  keys: string[] = Object.keys(values),
  parent?: string,
  state = { value: '' },
): string {
  for (const i in keys) {
    const key = keys[i]
    const value = values[key]
    const name = join(parent, key)
    if (obj(value)) {
      toCustomPropertiesDeclarations(
        value as { [key: string]: unknown },
        theme,
        Object.keys(value),
        name,
        state,
      )
      continue
    }
    if (string(value)) {
      state.value += toProp(toVarName(name), value)
      continue
    }
    if (func(value)) {
      state.value += toProp(toVarName(name), cascade(value, { theme }))
      continue
    }
  }

  return state.value
}
