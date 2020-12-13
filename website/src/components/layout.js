import React from 'react'
import { LiveConfig } from 'smooth-doc/components'
import styled, * as xstyledSc from '@xstyled/styled-components'
import * as xstyledSystem from '@xstyled/system'
import './styles/flow-font.css'

const { css } = xstyledSc

const CustomBox = styled.box`
  white-space: normal;

  ${p =>
    p.col &&
    css`
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      background-color: rgba(189, 73, 50, 0.15);
      border: 1;
      border-color: rgba(189, 73, 50, 0.2);
      font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    `}

  ${p =>
    p.row && p.alignItems
      ? css`
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
          min-height: 10rem;
          background-color: rgba(189, 73, 50, 0.3);
        `
      : null}
`

export default function Layout({ children }) {
  return (
    <>
      <LiveConfig
        modules={{
          react: React,
          '@xstyled/styled-components': Object.assign(styled, xstyledSc, {
            Box: CustomBox,
          }),
          '@xstyled/system': xstyledSystem,
        }}
      />
      <xstyledSc.Preflight />
      {children}
    </>
  )
}
