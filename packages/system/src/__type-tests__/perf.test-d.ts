/**
 * Heavy-instantiation type test. Not asserting anything specific; it exists
 * so `tsc --extendedDiagnostics` (run via `yarn bench:types`) reports
 * realistic numbers — i.e. the cost of resolving Color/Space against a
 * sizeable theme. If somebody regresses union-explosion behavior (#429),
 * the Instantiations counter on this file will spike.
 */
import type { Color } from '../styles/colors'
import type { Space } from '../styles/space'
import type { SystemProp } from '../types'

// 60 top-level color tokens plus a couple of nested scales — comparable to a
// real-world Tailwind-ish theme.
interface BigTheme {
  colors: {
    black: '#000'
    white: '#fff'
    transparent: 'transparent'
    'gray-50': '#f9fafb'
    'gray-100': '#f3f4f6'
    'gray-200': '#e5e7eb'
    'gray-300': '#d1d5db'
    'gray-400': '#9ca3af'
    'gray-500': '#6b7280'
    'gray-600': '#4b5563'
    'gray-700': '#374151'
    'gray-800': '#1f2937'
    'gray-900': '#111827'
    'red-50': '#fef2f2'
    'red-100': '#fee2e2'
    'red-200': '#fecaca'
    'red-300': '#fca5a5'
    'red-400': '#f87171'
    'red-500': '#ef4444'
    'red-600': '#dc2626'
    'red-700': '#b91c1c'
    'red-800': '#991b1b'
    'red-900': '#7f1d1d'
    'yellow-50': '#fefce8'
    'yellow-100': '#fef9c3'
    'yellow-200': '#fef08a'
    'yellow-300': '#fde047'
    'yellow-400': '#facc15'
    'yellow-500': '#eab308'
    'yellow-600': '#ca8a04'
    'yellow-700': '#a16207'
    'yellow-800': '#854d0e'
    'yellow-900': '#713f12'
    'green-50': '#f0fdf4'
    'green-100': '#dcfce7'
    'green-200': '#bbf7d0'
    'green-300': '#86efac'
    'green-400': '#4ade80'
    'green-500': '#22c55e'
    'green-600': '#16a34a'
    'green-700': '#15803d'
    'green-800': '#166534'
    'green-900': '#14532d'
    'blue-50': '#eff6ff'
    'blue-100': '#dbeafe'
    'blue-200': '#bfdbfe'
    'blue-300': '#93c5fd'
    'blue-400': '#60a5fa'
    'blue-500': '#3b82f6'
    'blue-600': '#2563eb'
    'blue-700': '#1d4ed8'
    'blue-800': '#1e40af'
    'blue-900': '#1e3a8a'
    // Plus a nested scale to exercise the recursive branch.
    brand: {
      primary: '#5b21b6'
      secondary: '#6d28d9'
      tertiary: '#7c3aed'
      light: '#a78bfa'
      dark: '#4c1d95'
    }
  }
  space: {
    0: 0
    0.5: '2px'
    1: '4px'
    2: '8px'
    3: '12px'
    4: '16px'
    5: '20px'
    6: '24px'
    8: '32px'
    10: '40px'
    12: '48px'
    16: '64px'
    20: '80px'
    24: '96px'
    32: '128px'
    40: '160px'
    48: '192px'
    56: '224px'
    64: '256px'
  }
  screens: {
    sm: 640
    md: 768
    lg: 1024
    xl: 1280
    '2xl': 1536
  }
  states: {
    _: null
    hover: '&:hover'
    focus: '&:focus'
    active: '&:active'
    disabled: '&:disabled'
  }
}

// Force materialization of the heavy generic types.
type ColorProp = SystemProp<Color<BigTheme>, BigTheme>
type SpaceProp = SystemProp<Space<BigTheme>, BigTheme>

declare const _colorAtRoot: ColorProp
declare const _colorAtBreakpoint: ColorProp
declare const _spaceAtRoot: SpaceProp

// Touch concrete responsive shapes so the responsive-prop variant is
// actually instantiated (not just declared).
const _r1: ColorProp = { sm: 'red-500', md: 'blue-500', lg: 'brand.primary' }
const _r2: SpaceProp = { sm: 1, md: 2, lg: 4 }
const _r3: ColorProp = 'gray-900'
const _r4: SpaceProp = '12px'

void _colorAtRoot
void _colorAtBreakpoint
void _spaceAtRoot
void _r1
void _r2
void _r3
void _r4
