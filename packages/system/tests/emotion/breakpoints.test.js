import { matchers } from 'jest-emotion'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { testBreakpoints } from '../common/breakpoints'

expect.extend(matchers)

testBreakpoints({ styled, css })
