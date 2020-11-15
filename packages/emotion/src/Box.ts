import * as React from 'react'
import styled from '@emotion/styled'
import { createBox } from '@xstyled/core'
import { createSystemComponent } from '@xstyled/system'
import { DefaultTheme } from './types'

const InnerBox = createSystemComponent<DefaultTheme>(React)
export const Box = styled(InnerBox)(createBox)
