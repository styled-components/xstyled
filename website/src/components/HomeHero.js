import React, { useState } from 'react'
import { x } from '@xstyled/styled-components'
import { Highlight } from './Prism'

const codes = {
  x: `
<x.div
  p={{ _: 3, md: 6 }}
  bg="white"
  display="flex"
  spaceX={4}
  alignItems="center"
  boxShadow
  borderRadius
>
  <x.div flexShrink={0}>
    <img height={12} width={12} src="/logo.png" alt="xstyled" />
  </x.div>
  <x.div>
    <x.h4
      text={{ _: "md", lg: "xl" }}
      fontWeight="medium"
      color="black"
    >
      xstyled
    </x.h4>
    <x.p color="gray-500" text="sm" my={1}>
      A CSS-in-JS framework built for React.
    </x.p>
  </x.div>
</x.div>
`.trim(),
  styled: `
const Card = styled.div\`
  padding: 3 6;
  background-color: white;
  display: flex;
  align-items: center;
  box-shadow: default;
  border-radius: default;

  & > * {
    margin-right: 4;
    margin-left: 4;
  }
\`

const CardImage = styled.div\`
  flex-shrink: 0;
\`

const CardBody = styled.div\`\`

const CardTitle = styled.h4\`
  font-size: md;
  line-height: md;
  font-weight: medium;
  color: black;

  @media (min-width: lg) {
    font-size: lg;
    line-height: lg;
  } 
\`

const CardSubtitle = styled.p\`
  color: gray-500;
  font-size: sm;
  line-height: sm;
  margin-top: 1;
\`

<Card>
  <CardImage>
    <img height={12} width={12} src="/logo.png" alt="xstyled" />
  </CardImage>
  <CardBody>
    <CardTitle>xstyled</CardTitle>
    <CardSubtitle>
      A CSS-in-JS framework built for React.
    </CardSubtitle>
  </CardBody>
</Card>
  `.trim(),
}

const CodeButton = ({ active, ...props }) => (
  <x.button
    borderRadius="xl"
    bg={active ? 'fuchsia-500-a10' : 'transparent'}
    outline={{ focus: 0 }}
    ring={{ focusVisible: 2 }}
    ringColor="fuchsia-500-a50"
    border={0}
    fontWeight="semibold"
    transition
    color={active ? 'pink-300' : { _: 'white', hover: 'white-a80' }}
    px={2}
    py={1}
    {...props}
  />
)

function Code() {
  const [type, setType] = useState('x')
  const code = codes[type]
  return (
    <x.div
      position="relative"
      borderRadius
      w={{ lg: '90%' }}
      boxShadow="2xl"
      alignSelf={{ lg: 'flex-end' }}
      bg="cool-gray-800"
    >
      <x.div display="flex" bg="black-a25" spaceX={2} p={2}>
        <CodeButton active={type === 'x'} onClick={() => setType('x')}>
          x.*
        </CodeButton>
        <CodeButton
          active={type === 'styled'}
          onClick={() => setType('styled')}
        >
          styled.*
        </CodeButton>
      </x.div>
      <x.div overflow="auto" h={40 * 8}>
        <x.div position="relative" h="auto">
          <x.div
            hidden
            display={{ lg: 'block' }}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            bg="black-a25"
            w={9}
          />
          <x.pre display="flex" fontSize={{ _: 'xs', lg: 'sm' }}>
            <x.div
              aria-hidden="true"
              hidden
              display={{ lg: 'block' }}
              color="white-a50"
              py={4}
              pr={3}
              textAlign="right"
              userSelect="none"
              w={9}
            >
              {Array.from(
                { length: code.split('\n').length },
                (_, index) => index + 1,
              ).join('\n')}
            </x.div>
            <x.code
              flex={1}
              position="relative"
              color="white"
              display="block"
              p={4}
            >
              <Highlight language="jsx" code={code} />
            </x.code>
          </x.pre>
        </x.div>
      </x.div>
    </x.div>
  )
}

export function HomeHero() {
  return (
    <x.div
      py={{ _: 14, lg: 8 }}
      px={{ _: 2, lg: 5 }}
      mx={{ _: -3, lg: 0 }}
      w={{ _: '100vw', lg: 'auto' }}
      display="flex"
      flexDirection="column"
      gap={3}
      position="relative"
    >
      <x.div
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        backgroundImage="gradient-to-r"
        gradientFrom="fuchsia-200"
        gradientTo="rose-200"
        boxShadow={{ _: null, lg: 'lg' }}
        transform
        rotate={{ lg: -6 }}
        borderRadius={{ lg: '3xl' }}
      />
      <x.div
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        backgroundImage="gradient-to-r"
        gradientFrom="fuchsia-400"
        gradientTo="rose-500"
        boxShadow={{ _: null, lg: 'lg' }}
        transform
        rotate={{ lg: -2 }}
        borderRadius={{ lg: '3xl' }}
      />
      <x.div
        position="relative"
        p={{ _: 3, md: 6 }}
        w={{ lg: '70%' }}
        bg="white"
        display="flex"
        spaceX={4}
        alignItems="center"
        boxShadow
        borderRadius
      >
        <x.div flexShrink={0}>
          <x.img
            h={12}
            w={12}
            src="https://raw.githubusercontent.com/gregberge/xstyled/master/website/images/logo-manifest.png"
            alt="xstyled Logo"
          />
        </x.div>
        <x.div>
          <x.h4 text={{ _: 'md', lg: 'xl' }} fontWeight="medium" color="black">
            xstyled
          </x.h4>
          <x.p color="gray-500" text="sm" my={1}>
            A CSS-in-JS framework built for React.
          </x.p>
        </x.div>
      </x.div>
      <Code />
    </x.div>
  )
}
