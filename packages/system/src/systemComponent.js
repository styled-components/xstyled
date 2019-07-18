import { omit } from './util'
import { system as allSystem } from './styles/index'

export const createSystemComponent = (
  { createElement, forwardRef },
  defaultComponent = 'div',
  system = allSystem,
) => {
  const SystemComponent = forwardRef(function SystemComponent(
    { as, ...props },
    ref,
  ) {
    const omittedProps = omit(props, system.meta.props)
    const Component = as || defaultComponent
    return createElement(Component, { ref, ...omittedProps })
  })
  SystemComponent.displayName = 'SystemComponent'
  return SystemComponent
}
