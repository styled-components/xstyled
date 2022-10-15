import React, { useContext, useState } from 'react'
import styled, {
  useTheme,
  th,
  up,
  css,
  x,
  ThemeProvider,
  defaultTheme,
} from '@xstyled/styled-components'
import Editor from 'react-simple-code-editor'
import { LiveProvider, LiveError, LivePreview, LiveContext } from 'react-live'
import { Highlight } from '../../components/Prism'

const Pre = styled.pre`
  font-size: 15;
  line-height: 1.45;
  word-break: normal;
  overflow: auto;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  margin: 3 -3;
  background-color: editor-background;
  color: editor-on;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  hyphens: none;
  padding: 4 0;
  border-left: ${th.space(4)} solid transparent;
  border-right: ${th.space(4)} solid transparent;

  textarea {
    &:focus {
      outline: none;
    }
  }

  ${up(
    'sm',
    css`
      border-radius: editor;

      &[data-preview='true'] {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
      margin: 3 -2;
    `,
  )}
`

const Preview = styled.div`
  padding: preview-padding-y preview-padding-x;
  margin: 3 -3 -3;
  border-top: 1;
  border-color: editor-border;
  border-image: initial;

  white-space: normal;
  font-family: base;
  overflow: hidden;

  background-color: background;
  color: on-background;

  ${up(
    'sm',
    css`
      border-right: 1;
      border-left: 1;
      border-radius: editor;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-color: editor-border;
      margin-left: -2;
      margin-right: -2;
    `,
  )}
`

const globalModules = {
  react: 'React',
}

export function LiveConfig({ modules }) {
  Object.assign(globalModules, modules)
  return null
}

function req(path) {
  const dep = globalModules[path]

  if (!dep) {
    throw new Error(
      `Unable to resolve path to module '${path}'. Use "LiveConfig" to provide modules.`,
    )
  }
  return dep
}

function importToRequire(code) {
  return (
    code
      // { a as b } => { a: b }
      .replace(/([0-9a-z_$]+) as ([0-9a-z_$]+)/gi, '$1: $2')
      // import { a } from "a" => const { a } = require("b")
      .replace(
        /import {([^}]+)} from ([^\s;]+);?/g,
        'const {$1} = require($2);',
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import ([\S]+) from ([^\s;]+);?/g,
        'const $1 = require($2).default || require($2);',
      )
      // import * as a from "a"
      .replace(
        /import \* as ([\S]+) from ([^\s;]+);?/g,
        'const $1 = require($2);',
      )
      // import a from "a" => const a = require("a").default || require("a")
      .replace(
        /import (.+),\s?{([^}]+)} from ([^\s;]+);?/g,
        [
          'const $1 = require($3).default || require($3);',
          'const {$2} = require($3);',
        ].join('\n'),
      )
  )
}

export function usePrismTheme() {
  const theme = useTheme()
  return th('prism-theme')({ theme })
}

function LiveEditor() {
  const {
    code: initialCode,
    language,
    theme,
    onChange,
  } = useContext(LiveContext)
  const [code, setCode] = useState(initialCode)
  const baseTheme = theme && typeof theme.plain === 'object' ? theme.plain : {}
  return (
    <Editor
      value={code}
      padding={10}
      highlight={(code) => <Highlight code={code} language={language} />}
      onValueChange={(code) => {
        setCode(code)
        onChange(code)
      }}
      style={{
        whiteSpace: 'pre',
        fontFamily: 'monospace',
        ...baseTheme,
      }}
    />
  )
}

const PREVIEW_REGEXP =
  /<>\s*<template preview>(?<preview>[\s\S]*)<\/template>(?<code>[\s\S]*)\s*<\/>/m

const parseMeta = (metaString) => {
  if (!metaString) return {}
  const params = new URLSearchParams(metaString.replace(' ', '&'))
  const obj = Object.fromEntries(params.entries())
  return Object.entries(obj).reduce((obj, [key, value]) => {
    obj[key] = value === '' ? true : value
    return obj
  }, {})
}

export function Code({ children, lang = 'jsx', meta: metaString }) {
  const meta = parseMeta(metaString)
  const { preview, live, noInline, color } = meta
  const prismTheme = usePrismTheme()
  if (preview) {
    const rawCode = children.trim()
    const previewMatches = rawCode.match(PREVIEW_REGEXP)
    if (!previewMatches) throw new Error('Preview template not found')
    const { preview, code } = previewMatches.groups
    return (
      <>
        <LiveProvider
          code={preview}
          transformCode={(code) => importToRequire(code)}
          scope={{ require: req, x }}
          language={lang}
          theme={prismTheme}
          noInline={noInline}
        >
          <Preview>
            <ThemeProvider theme={defaultTheme}>
              <x.div
                p={5}
                overflow="hidden"
                backgroundImage="gradient-to-r"
                gradientFrom={color ? `${color}-50` : 'cool-gray-50'}
                gradientTo={color ? `${color}-100` : 'cool-gray-100'}
              >
                <LivePreview />
              </x.div>
            </ThemeProvider>
          </Preview>
          <LiveError />
        </LiveProvider>
        <Pre data-preview>
          <Highlight
            code={code.replace(/\n\s{2}/g, '\n').trim()}
            language={lang}
          />
        </Pre>
      </>
    )
  }
  if (live) {
    return (
      <LiveProvider
        code={children.trim()}
        transformCode={(code) => importToRequire(code)}
        scope={{ require: req }}
        language={lang}
        theme={prismTheme}
        noInline={noInline}
      >
        <Preview as={LivePreview} />
        <Pre>
          <LiveEditor />
        </Pre>
        <LiveError />
      </LiveProvider>
    )
  }
  return (
    <Pre>
      <Highlight code={children} language={lang} />
    </Pre>
  )
}
