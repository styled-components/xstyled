import React from 'react'
import { Link } from 'gatsby'
import {
  ThemeProvider,
  x,
  defaultTheme,
  useTheme,
} from '@xstyled/styled-components'
import {
  ScreenContainer,
  FeatureSection,
  FeatureList,
  Feature,
  FeatureImage,
  FeatureTitle,
  FeatureText,
  Article,
  SiblingNav,
  SiblingNavLink,
  Button,
} from 'smooth-doc/components'
import { Highlight } from './Prism'
import GettingStarted from './getting-started.mdx'
import css3ImageUrl from './images/icons8-css3-100.png'
import europeImageUrl from './images/icons8-europe-100.png'
import fantasyImageUrl from './images/icons8-fantasy-100.png'
import lightningBoltImageUrl from './images/icons8-lightning-bolt-100.png'
import moonAndStarsImageUrl from './images/icons8-moon-and-stars-100.png'
import paintPaletteImageUrl from './images/icons8-paint-palette-100.png'
import pluginImageUrl from './images/icons8-plugin-100.png'
import programmingFlagImageUrl from './images/icons8-programming-flag-100.png'
import reactImageUrl from './images/icons8-react-100.png'
import responsiveImageUrl from './images/icons8-responsive-100.png'
import rulerImageUrl from './images/icons8-ruler-100.png'
import webAccessibilityImageUrl from './images/icons8-web-accessibility-100.png'

const exampleCode = `
function Example() {
  return (
    <x.div p={{ _: 3, md: 6 }} bg="white" display="flex" spaceX={4}>
      <x.div flexShrink={0}>
        <x.img h={12} w={12} src="/img/logo.svg" alt="xstyled Logo" />
      </x.div>
      <x.div>
        <x.h4 fontSize={{ _: 'md', lg: 'xl' }} fontWeight="medium" color="black">
          xstyled
        </x.h4>
        <x.p color="gray-500">A CSS-in-JS framework built for React.</x.p>
      </x.div>
    </x.div>
  )
}
`.trim()

function CodeExample() {
  return (
    <x.div position="relative" mt={{ lg: 10 }} mx={{ _: -4, lg: 0 }}>
      <x.div
        position="absolute"
        display={{ _: 'none', lg: 'block' }}
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
        display={{ _: 'none', lg: 'block' }}
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
        borderRadius={{ lg: 'xl' }}
        boxShadow="2xl"
        display="flex"
        bg="fuchsia-600"
        skewY={3}
        skewX={2}
        border={{ lg: 1 }}
        borderColor={{ lg: 'fuchsia-900' }}
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
              display={{ lg: 'block' }}
              position="absolute"
              top={0}
              bottom={0}
              left={0}
              bg="black-a25"
              w={50}
            />
            <x.div
              w={{ _: '100vw', lg: 1 }}
              flex="1 1 auto"
              display="flex"
              minHeight={0}
              overflow="auto"
            >
              <x.div w={1} position="relative" flex="1 1 auto">
                <x.pre
                  display="flex"
                  minHeight={1}
                  fontSize={{ _: 'xs', lg: 'sm' }}
                >
                  <x.div
                    aria-hidden="true"
                    hidden
                    display={{ lg: 'block' }}
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
                    <Highlight language="jsx" code={exampleCode} />
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
  const theme = useTheme()
  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        sizes: { ...defaultTheme.sizes, ...theme.sizes },
        colors: { ...defaultTheme.colors, ...theme.colors },
      }}
    >
      <ScreenContainer>
        <x.section mt={{ _: 10, lg: 20 }} color="on-background">
          <x.div
            display="grid"
            gridTemplateColumns={{ _: '1fr', lg: '3fr 2fr' }}
            gap={10}
          >
            <x.div>
              <x.h1
                fontWeight="extrabold"
                fontSize={{ _: '5xl', lg: '7xl' }}
                lineHeight="1.1"
                letterSpacing="tight"
                mb={4}
              >
                Build your entire website using JSX and Props.
              </x.h1>
              <x.p
                fontSize={{ _: '2xl', lg: '3xl' }}
                color="on-background-light"
                mb={4}
              >
                A CSS-in-JS framework built for React with props based utilities
                like{' '}
                <x.code fontWeight="bold" color="on-background">
                  display
                </x.code>
                ,{' '}
                <x.code fontWeight="bold" color="on-background">
                  fontSize
                </x.code>{' '}
                or{' '}
                <x.code fontWeight="bold" color="on-background">
                  rotate
                </x.code>
                .
              </x.p>
              <x.div display="inline-grid" gridAutoFlow="column" gap={4}>
                <Button
                  forwardedAs={Link}
                  to="/docs/installation/"
                  borderRadius="xl"
                  transition
                  fontSize="lg"
                  py={3}
                  px={4}
                >
                  Getting Started
                </Button>
                <Button
                  forwardedAs="a"
                  href="https://github.com/gregberge/xstyled/"
                  borderRadius="xl"
                  transition
                  fontSize="lg"
                  variant="neutral"
                  py={3}
                  px={4}
                >
                  GitHub Repository
                </Button>
              </x.div>
            </x.div>
            <x.div>
              <CodeExample />
            </x.div>
          </x.div>
        </x.section>
      </ScreenContainer>
      <FeatureSection mt={{ lg: 32 }}>
        <FeatureList>
          <Feature>
            <FeatureImage src={reactImageUrl} />
            <FeatureTitle>Made for React</FeatureTitle>
            <FeatureText>
              With xstyled, CSS is declarative. It fits with React philosophy,
              writing CSS is as easy as writing props.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={europeImageUrl} />
            <FeatureTitle>Universal</FeatureTitle>
            <FeatureText>
              xstyled is compatible with styled-components and Emotion. It
              exposes a unified API on top of the most powerful CSS-in-JS
              libraries.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={rulerImageUrl} />
            <FeatureTitle>Consistent</FeatureTitle>
            <FeatureText>
              Define all your design tokens in theme to create a consistent API
              for color choices, typography, spacing, shadows…
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={fantasyImageUrl} />
            <FeatureTitle>Flexible</FeatureTitle>
            <FeatureText>
              xstyled is fully dynamic, it means you can use arbitrary values
              for everything without compromise.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={paintPaletteImageUrl} />
            <FeatureTitle>Themeable</FeatureTitle>
            <FeatureText>
              Give your components a new look in your next project. Create
              universes in the same project with dynamic theme switching.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={lightningBoltImageUrl} />
            <FeatureTitle>Performant</FeatureTitle>
            <FeatureText>
              Built on top of the two most performant CSS-in-JS library and
              heavily optimized, xstyled is really fast.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={responsiveImageUrl} />
            <FeatureTitle>Responsive</FeatureTitle>
            <FeatureText>
              Creating responsive and mobile first components has never been easier.
            </FeatureText>
          </Feature>

          <Feature>
            <FeatureImage src={programmingFlagImageUrl} />
            <FeatureTitle>TypeScript Friendly</FeatureTitle>
            <FeatureText>
              xstyled is written in TypeScript, types are built-in. Autocomplete
              all properties with values defined in your theme.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={moonAndStarsImageUrl} />
            <FeatureTitle>Dark Mode</FeatureTitle>
            <FeatureText>
              Defines new colors in theme to enable dark mode for your project. Use
              system preference or Hooks to control it.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={pluginImageUrl} />
            <FeatureTitle>Extendable</FeatureTitle>
            <FeatureText>
              Create new utilities, compose them with existing ones, publish it
              as plugin. Possibilities are infinite!
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={css3ImageUrl} />
            <FeatureTitle>Modern</FeatureTitle>
            <FeatureText>
              xstyled leverages cutting edge features like CSS grids,
              transforms, gradients. It makes it safe and easy.
            </FeatureText>
          </Feature>
          <Feature>
            <FeatureImage src={webAccessibilityImageUrl} />
            <FeatureTitle>Accessible</FeatureTitle>
            <FeatureText>
              xstyled makes it easy to implement accessibility features like
              using <code>rem</code> instead of <code>px</code>.
            </FeatureText>
          </Feature>
        </FeatureList>
      </FeatureSection>
      <ScreenContainer as="section" py={14}>
        <Article>
          <GettingStarted />
          <SiblingNav>
            <SiblingNavLink type="next" to="/docs/installation/">
              Read full documentation
            </SiblingNavLink>
          </SiblingNav>
        </Article>
      </ScreenContainer>
    </ThemeProvider>
  )
}
