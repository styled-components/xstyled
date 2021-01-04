import { matchers } from '@emotion/jest'
import styled, { css } from '@xstyled/emotion'
import { testBreakpoints } from '../common/breakpoints'

expect.extend(matchers)

testBreakpoints({ styled, css })
