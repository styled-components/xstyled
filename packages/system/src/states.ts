import { is, getThemeValue } from '@xstyled/util'
import { IStates, IProps } from './types'

export function getThemeStates(props: IProps): IStates {
  const themeStates = getThemeValue<IProps>(props, 'states')
  if (is(themeStates)) return themeStates
  return {}
}
