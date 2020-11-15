import * as React from 'react'
import { omit } from '@xstyled/util'
import { system as allSystem, SystemProps } from './styles/index'
import { StyleGenerator } from './types'

export type As<Props = any> = React.ElementType<Props>
export type PropsWithAs<Props = {}, Type extends As = As> = Props &
  Omit<React.ComponentProps<Type>, 'as' | keyof Props> & {
    as?: Type
  }

export type ComponentWithAs<Props, DefaultType extends As> = {
  <Type extends As>(props: PropsWithAs<Props, Type> & { as: Type }): JSX.Element
  (props: PropsWithAs<Props, DefaultType>): JSX.Element
  displayName?: string
}

function forwardRefWithAs<Props, DefaultType extends As>(
  forwardRef: typeof React.forwardRef,
  component: React.ForwardRefRenderFunction<any, any>,
) {
  return (forwardRef(component) as unknown) as ComponentWithAs<
    Props,
    DefaultType
  >
}

export const createSystemComponent = <
  T = {},
  Props = SystemProps<T>,
  DefaultType extends As = 'div'
>(
  {
    createElement,
    forwardRef,
  }: {
    createElement: typeof React.createElement
    forwardRef: typeof React.forwardRef
  },
  defaultComponent?: DefaultType,
  system: StyleGenerator<Props> = allSystem,
) => {
  function InnerSystemComponent<Type extends As>(
    props: PropsWithAs<Props, Type>,
    ref: React.Ref<HTMLDivElement>,
  ) {
    const { as: Type = defaultComponent ?? 'div', ...rest } = props
    const omitted = omit(rest, system.meta.props)
    return createElement(Type, { ref, ...omitted })
  }
  const SystemComponent = forwardRefWithAs<Props, DefaultType>(
    forwardRef,
    InnerSystemComponent,
  )
  SystemComponent.displayName = 'SystemComponent'
  return SystemComponent
}
