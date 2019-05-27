import '../utils/prism'
import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider, css } from '@xstyled/styled-components'
import { variant } from '@xstyled/system'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from '@probablyup/react-live'

const Editor = styled.div`
  background-color: gray200;
  font-family: monospace !important;
  font-weight: 300;
  height: 400px;
  overflow-y: scroll;
  border-radius: 5;
  caret-color: #343a40;
  text-align: left;
  padding: 10px;

  pre {
    margin: 0;
  }

  pre:focus {
    outline: none;
  }
`

const Container = styled.div`
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
  padding-bottom: 5;
`

const code = `
const Button = styled.a\`
  /* This renders the buttons above... Edit me! */
  border: 2; /* ⟶ 2px solid */
  color: white; /* ⟶ theme.colors.white */
  border-color: primary; /* ⟶ theme.colors.primary */
  border-radius: medium; /* ⟶ theme.radii.medium */
  padding: 2 4; /* ⟶ theme.space.* */
  margin: 5 2; /* ⟶ theme.space.* */
  background-color: primary; /* ⟶ theme.colors.primary */
  display: inline-block;
  transition: background-color 300ms, color 300ms;

  &:hover {
    color: white;
    background-color: primaryLight;
  }

  \${p => p.secondary && css\`
    color: primary;
    background-color: transparent;

    &:hover {
      color: white;
      background-color: primary;
    }
  \`}
\`

const theme = {
  colors: {
    primary: 'palevioletred',
    primaryLight: 'pink',
    secondary: 'gray'
  },
  radii: {
    medium: 3,
  }
}

render(
  <ThemeProvider theme={theme}>
    <>
      <Button
        href="https://github.com/smooth-code/xstyled"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </Button>
      <Button
        as={Link}
        variant="secondary"
        to="/docs/getting-started/"
        secondary
      >
        Getting Started
      </Button>
    </>
  </ThemeProvider>
)
`.trim()

const scope = { React, ThemeProvider, styled, css, variant, Link }

export default function LiveButtons() {
  return (
    <Container>
      <LiveProvider mountStylesheet={false} code={code} scope={scope} noInline>
        <LivePreview />
        <LiveError />
        <Editor>
          <LiveEditor />
        </Editor>
      </LiveProvider>
    </Container>
  )
}
