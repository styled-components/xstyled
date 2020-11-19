import * as React from 'react'
import styled from '@emotion/styled'
import { Theme } from '@emotion/react'
import { createBox } from '@xstyled/core'
import { createSystemComponent } from '@xstyled/system'

const InnerBox = createSystemComponent<Theme>(React)
export const Box = styled(InnerBox)(createBox)
