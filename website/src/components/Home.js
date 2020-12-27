import React from 'react'
import { ThemeProvider, x, defaultTheme } from '@xstyled/styled-components'
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

const exampleCode = `
function Example() {
  return return (
    <x.div p={6} bg="white" display="flex" alignItems="center" spaceX={4}>
      <x.div flexShrink={0}>
        <x.img h={12} w={12} src="/img/logo.svg" alt="xstyled Logo" />
      </x.div>
      <x.div>
        <x.h4 fontSize="xl" fontWeight="medium" color="black">
          xstyled
        </x.h4>
        <x.p color="gray-500">The CSS in JS Framework.</x.p>
      </x.div>
    </x.div>
  )
}
`.trim()

function RawHighlight({ code }) {
  const html = Prism.highlight(code, Prism.languages.jsx, 'jsx')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

function CodeExample() {
  return (
    <x.div position="relative" mt={{ md: 10 }} mx={{ _: -4, md: 0 }}>
      <x.div
        position="absolute"
        display={{ _: 'none', md: 'block' }}
        top={0}
        right={0}
        bottom={0}
        left={0}
        backgroundImage="gradient-to-t"
        gradientFrom="transparent"
        gradientTo="pink-300"
        transform="rotate3d(-.85,-.85,0,30deg) rotateZ(-18deg) scale(1.175)"
        borderRadius="xl"
      />
      <x.div
        position="absolute"
        display={{ _: 'none', md: 'block' }}
        top={0}
        right={0}
        bottom={0}
        left={0}
        backgroundImage="gradient-to-t"
        gradientFrom="transparent"
        gradientTo="fuchsia-500"
        transform="rotate3d(-.5,-.85,0,15deg) rotateZ(-9deg) scale(1.05)"
        borderRadius="xl"
      />
      <x.div
        position="relative"
        overflow="hidden"
        borderRadius={{ md: 'xl' }}
        boxShadow="2xl"
        transform={{ md: 'rotate3d(-.5,-.85,0,16deg) rotateZ(-1deg)' }}
        display="flex"
        bg="fuchsia-600"
        skewY={3}
        skewX={2}
        border={{ md: 1 }}
        borderColor={{ md: 'fuchsia-900' }}
      >
        <x.div
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          bg="black-a80"
        />
        <x.div position="relative" w={1} display="flex" flexDirection="column">
          <x.div
            position="relative"
            borderStyle="solid"
            borderWidth="1 0 0"
            borderColor="white-a10"
            minHeight={0}
            flex="1 1 auto"
            display="flex"
            flexDirection="column"
          >
            <x.div
              hidden
              display={{ md: 'block' }}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              bg="black-a25"
              w={50}
            />
            <x.div
              w={{ _: '100vw', md: 1 }}
              flex="1 1 auto"
              display="flex"
              minHeight={0}
              overflow="auto"
            >
              <x.div w={1} position="relative" flex="1 1 auto">
                <x.pre
                  display="flex"
                  minHeight={1}
                  fontSize={{ _: 'xs', md: 'sm' }}
                >
                  <x.div
                    aria-hidden="true"
                    hidden
                    display={{ md: 'block' }}
                    color="white-a50"
                    flex="none"
                    py={4}
                    pr={4}
                    textAlign="right"
                    userSelect="none"
                    w={50}
                  >
                    {Array.from({ length: 16 }, (_, index) => index + 1).join(
                      '\n',
                    )}
                  </x.div>
                  <x.code
                    flex="1 1 auto"
                    position="relative"
                    color="white"
                    display="block"
                    p={4}
                  >
                    <RawHighlight code={exampleCode} />
                  </x.code>
                </x.pre>
              </x.div>
            </x.div>
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  )
}

export function Home() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <x.div
        w={1}
        maxWidth={1440}
        px={4}
        mx="auto"
        mt={{ _: 10, md: 20 }}
        color="black"
      >
        <x.div
          display="grid"
          gridTemplateColumns={{ _: '1fr', md: '3fr 2fr' }}
          gap={10}
        >
          <x.div>
            <x.h1
              fontWeight="extrabold"
              fontSize={{ _: '5xl', md: '7xl' }}
              lineHeight="1.1"
              letterSpacing="tight"
              mb={4}
            >
              Build your entire website using JSX and Props.
            </x.h1>
            <x.p fontSize={{ _: '2xl', md: '3xl' }} color="gray-600">
              An all-in-one CSS in JS Framework build for React with props based
              utilities like{' '}
              <x.code fontWeight="bold" color="black">
                display
              </x.code>
              ,{' '}
              <x.code fontWeight="bold" color="black">
                fontSize
              </x.code>{' '}
              or{' '}
              <x.code fontWeight="bold" color="black">
                rotate
              </x.code>
              .
            </x.p>
          </x.div>
          <x.div>
            <CodeExample />
          </x.div>
        </x.div>
      </x.div>
    </ThemeProvider>
  )
}
