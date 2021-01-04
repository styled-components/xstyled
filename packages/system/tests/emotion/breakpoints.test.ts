import { matchers } from '@emotion/jest'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { testBreakpoints } from '../common/breakpoints'

expect.extend(matchers)

testBreakpoints({ styled, css })
