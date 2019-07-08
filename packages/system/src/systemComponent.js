import { omit } from './util'
import { system as allSystem } from './styles/index'

export const createSystemComponent = (
  createElement,
  defaultComponent = 'div',
  system = allSystem,
) => {
  function SystemComponent({ as, ...props }) {
    const omittedProps = omit(props, system.meta.props)
    const Component = as || defaultComponent
    return createElement(Component, omittedProps)
  }
  SystemComponent.displayName = 'SystemComponent'
  return SystemComponent
}
