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
import { HomeHero } from './HomeHero'
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

const LargeButton = (props) => (
  <Button
    borderRadius={{ _: 'default', md: 'xl' }}
    transition
    fontSize={{ md: 'lg' }}
    py={{ md: 3 }}
    px={{ md: 4 }}
    {...props}
  />
)

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
            gridTemplateColumns={{ _: '1fr', lg: '1fr 1fr' }}
            gap={4}
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
                <LargeButton as={Link} to="/docs/installation/">
                  Getting Started
                </LargeButton>
                <LargeButton
                  as="a"
                  href="https://github.com/gregberge/xstyled/"
                  variant="neutral"
                >
                  GitHub Repository
                </LargeButton>
              </x.div>
            </x.div>
            <x.div>
              <HomeHero />
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
              Creating responsive and mobile first components has never been
              easier.
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
              Defines new colors in theme to enable dark mode for your project.
              Use system preference or Hooks to control it.
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
