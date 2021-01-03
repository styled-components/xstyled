import React from 'react'
import { Preflight } from '@xstyled/styled-components'
import './styles/flow-font.css'

export default function Layout({ children }) {
  return (
    <>
      <Preflight />
      {children}
    </>
  )
}
