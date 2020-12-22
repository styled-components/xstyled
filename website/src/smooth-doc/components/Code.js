import React, { Fragment, useContext, useState } from 'react'
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
import Prism from 'prismjs/components/prism-core'
import 'prismjs/themes/prism-dark.css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-diff'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.css'
import { LiveProvider, LiveError, LivePreview, LiveContext } from 'react-live'
import { mdx } from '@mdx-js/react'

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

const PrismContainer = styled.div`
  .token.deleted:not(.prefix) {
    background-color: rgba(255, 0, 0, 0.1);
    color: inherit;
    display: block;
  }

  .token.inserted:not(.prefix) {
    background-color: rgba(0, 255, 128, 0.1);
    color: inherit;
    display: block;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: #d6deeb;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    text-shadow: none;
    background: rgba(29, 59, 83, 0.99);
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: #011627;
  }

  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: rgb(99, 119, 119);
    font-style: italic;
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .namespace {
    color: rgb(178, 204, 214);
  }

  .token.deleted {
    color: rgba(239, 83, 80, 0.56);
    font-style: italic;
  }

  .token.symbol,
  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: rgb(127, 219, 202);
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.constant,
  .token.function,
  .token.builtin,
  .token.char {
    color: rgb(130, 170, 255);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
    font-style: italic;
  }

  .token.attr-name,
  .token.inserted {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.string,
  .token.url,
  .token.entity,
  .language-css .token.string,
  .style .token.string {
    color: rgb(173, 219, 103);
  }

  .token.class-name,
  .token.atrule,
  .token.attr-value {
    color: rgb(255, 203, 139);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }
`

function RawHighlight({ code, language: rawLanguage }) {
  const language = rawLanguage === 'diffjs' ? 'diff-js' : rawLanguage
  const grammar =
    rawLanguage === 'diffjs' ? Prism.languages.diff : Prism.languages[language]
  const html = Prism.highlight(code, grammar, language)
  return <PrismContainer dangerouslySetInnerHTML={{ __html: html }} />
}

function LiveEditor() {
  const { code: initialCode, language, theme, onChange } = useContext(
    LiveContext,
  )
  const [code, setCode] = useState(initialCode)
  const baseTheme = theme && typeof theme.plain === 'object' ? theme.plain : {}
  return (
    <Editor
      value={code}
      padding={10}
      highlight={(code) => <RawHighlight code={code} language={language} />}
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

const PREVIEW_REGEXP = /<>\s*<template preview>(?<preview>[\s\S]*)<\/template>(?<code>[\s\S]*)\s*<\/>/m

export function Code({
  children,
  lang = 'jsx',
  preview,
  live,
  noInline,
  color,
}) {
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
          transformCode={(code) => `/* @jsx mdx */ ${importToRequire(code)}`}
          scope={{ mdx, require: req, x }}
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
          <RawHighlight
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
        transformCode={(code) => `/* @jsx mdx */ ${importToRequire(code)}`}
        scope={{ mdx, require: req }}
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
      <RawHighlight code={children} language={lang} />
    </Pre>
  )
}
