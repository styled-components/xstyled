import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import styled, { css } from 'styled-components'
import { testBreakpoints } from '../common/breakpoints'

testBreakpoints({ styled, css })
