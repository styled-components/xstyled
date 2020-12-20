/* eslint-disable no-continue, no-loop-func, no-cond-assign */
import scStyled, {
  ThemedStyledFunction,
  StyledConfig,
  ThemedBaseStyledInterface,
  DefaultTheme,
} from 'styled-components'
import { SystemProps } from '@xstyled/system'
import { BoxElements } from './BoxElements'
import { x } from './x'
import { css } from './css'

function getCreateStyle(baseCreateStyle: ThemedStyledFunction<any, any>) {
  // @ts-ignore
  const createStyle = (...args: any) => baseCreateStyle`${css(...args)}`
  createStyle.attrs = (attrs: any) => {
    const nextCreateStyle = baseCreateStyle.attrs(attrs)
    return getCreateStyle(nextCreateStyle)
  }
  createStyle.withConfig = (config: StyledConfig<any>) => {
    const nextCreateStyle = baseCreateStyle.withConfig(config)
    return getCreateStyle(nextCreateStyle)
  }
  return createStyle
}

type ThemedXStyledComponentFactories<T extends object> = {
  [Key in keyof BoxElements]: ThemedStyledFunction<
    BoxElements[Key],
    T,
    SystemProps<T>
  >
}

interface ThemeBaseXStyledInterface<T extends object>
  extends ThemedBaseStyledInterface<T>,
    ThemedXStyledComponentFactories<T> {}

type XStyledInterface = ThemeBaseXStyledInterface<DefaultTheme>

export const styled = <XStyledInterface>(
  ((component: any) => getCreateStyle(scStyled(component)))
)

// @ts-ignore
styled.box = styled(x.div)

Object.keys(scStyled).forEach(key => {
  // @ts-ignore
  styled[key] = styled(key)
  // @ts-ignore
  styled[`${key}Box`] = styled(x[key])
})
