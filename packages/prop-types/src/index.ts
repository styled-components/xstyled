import { oneOfType, number, string, object, bool } from 'prop-types'

export function getSystemPropTypes(system?: any) {
  if (!system) return {}
  return system.meta.props.reduce(
    (obj: { [key: string]: any }, prop: string) => {
      obj[prop] = oneOfType([number, string, object, bool])
      return obj
    },
    {} as { [key: string]: any },
  )
}
