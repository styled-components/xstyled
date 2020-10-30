import { oneOfType, number, string, object, bool } from 'prop-types'

export function getSystemPropTypes(system) {
  if (!system) return {}
  return system.meta.props.reduce((obj, prop) => {
    obj[prop] = oneOfType([number, string, object, bool])
    return obj
  }, {})
}
