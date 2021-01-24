import React from 'react'
import { x, defaultTheme, ThemeProvider } from '@xstyled/styled-components'

function Color({ color, intensity }) {
  return (
    <x.div spaceY={1.5}>
      <x.div h={10} w="full" borderRadius style={{ backgroundColor: color }} />
      <x.div
        px={1}
        display={{ md: 'flex', '2xl': 'block' }}
        justifyContent={{ md: 'space-between' }}
        spaceX={{ md: 2, '2xl': 0 }}
      >
        <x.div w={6} fontWeight="medium">
          {intensity}
        </x.div>
        <x.div color="gray-500" fontSize="10px">
          {color}
        </x.div>
      </x.div>
    </x.div>
  )
}

function formatColorName(key) {
  return key
    .split('-')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(' ')
}

function ColorSet({ themeKey, children }) {
  return (
    <div>
      <x.div
        display="flex"
        flexDirection={{ _: 'column', sm: 'row' }}
        fontSize="xs"
      >
        <x.div w={32} flexShrink={0}>
          <x.div
            h={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <x.div fontSize="sm" fontWeight="semibold">
              {formatColorName(themeKey)}
            </x.div>
            <div>
              <x.code fontSize="xs" color="gray-500" p={0}>
                colors.{themeKey}
              </x.code>
            </div>
          </x.div>
        </x.div>
        <x.div
          minWidth={0}
          flex="1 1 0"
          display="grid"
          gridTemplateColumns={{ _: 5, xxl: 10 }}
          gap={3}
        >
          {children}
        </x.div>
      </x.div>
    </div>
  )
}

export function Colors(props) {
  const colors = defaultTheme.colors
  const groups = Object.keys(colors).reduce((groups, key) => {
    const matches = key.match(/(?<family>.*)-(?<intensity>\d+)(?<alpha>-\d+)?/)
    if (!matches) return groups
    const { family, intensity, alpha } = matches.groups
    if (alpha) return groups
    groups[family] = groups[family] || {}
    groups[family][intensity] = colors[key]
    return groups
  }, {})

  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        colors: {
          ...defaultTheme.colors,
        },
      }}
    >
      <x.div display="grid" gridTemplateColumns="1" gap={8} {...props}>
        {Object.entries(groups).map(([themeKey, group]) => {
          return (
            <ColorSet key={themeKey} themeKey={themeKey}>
              {Object.entries(group).map(([intensity, color]) => (
                <Color key={intensity} color={color} intensity={intensity} />
              ))}
            </ColorSet>
          )
        })}
      </x.div>
    </ThemeProvider>
  )
}
