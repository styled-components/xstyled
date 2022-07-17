import { generateHexAlphaVariants, aliasColor } from './colors'

describe('#colors', () => {
  describe('#generateHexAlphaVariants', () => {
    it('generates colors with default alpha', () => {
      const colors = generateHexAlphaVariants({
        white: '#ffffff',

        'blue-gray-500': '#64748b',
      })

      expect(colors).toEqual({
        white: '#ffffff',
        'white-a0': '#ffffff00',
        'white-a5': '#ffffff0d',
        'white-a10': '#ffffff1a',
        'white-a20': '#ffffff33',
        'white-a25': '#ffffff40',
        'white-a30': '#ffffff4d',
        'white-a40': '#ffffff66',
        'white-a50': '#ffffff80',
        'white-a60': '#ffffff99',
        'white-a70': '#ffffffb3',
        'white-a75': '#ffffffbf',
        'white-a80': '#ffffffcc',
        'white-a90': '#ffffffe6',
        'white-a95': '#fffffff2',
        'white-a100': '#ffffffff',

        'blue-gray-500': '#64748b',
        'blue-gray-500-a0': '#64748b00',
        'blue-gray-500-a5': '#64748b0d',
        'blue-gray-500-a10': '#64748b1a',
        'blue-gray-500-a20': '#64748b33',
        'blue-gray-500-a25': '#64748b40',
        'blue-gray-500-a30': '#64748b4d',
        'blue-gray-500-a40': '#64748b66',
        'blue-gray-500-a50': '#64748b80',
        'blue-gray-500-a60': '#64748b99',
        'blue-gray-500-a70': '#64748bb3',
        'blue-gray-500-a75': '#64748bbf',
        'blue-gray-500-a80': '#64748bcc',
        'blue-gray-500-a90': '#64748be6',
        'blue-gray-500-a95': '#64748bf2',
        'blue-gray-500-a100': '#64748bff',
      })
    })

    it('generates colors with custom alpha', () => {
      const colors = generateHexAlphaVariants(
        {
          white: '#ffffff',
          'blue-gray-500': '#64748b',
        },
        [1, 2, 3],
      )

      expect(colors).toEqual({
        white: '#ffffff',
        'white-a1': '#ffffff3',
        'white-a2': '#ffffff5',
        'white-a3': '#ffffff8',

        'blue-gray-500': '#64748b',
        'blue-gray-500-a1': '#64748b03',
        'blue-gray-500-a2': '#64748b05',
        'blue-gray-500-a3': '#64748b08',
      })
    })
  })

  describe('#aliasColor', () => {
    it('aliases colors', () => {
      expect(aliasColor('primary', 'emerald')).toMatchInlineSnapshot(`
        Object {
          "primary-100": [Function],
          "primary-100-a0": [Function],
          "primary-100-a10": [Function],
          "primary-100-a100": [Function],
          "primary-100-a20": [Function],
          "primary-100-a25": [Function],
          "primary-100-a30": [Function],
          "primary-100-a40": [Function],
          "primary-100-a5": [Function],
          "primary-100-a50": [Function],
          "primary-100-a60": [Function],
          "primary-100-a70": [Function],
          "primary-100-a75": [Function],
          "primary-100-a80": [Function],
          "primary-100-a90": [Function],
          "primary-100-a95": [Function],
          "primary-200": [Function],
          "primary-200-a0": [Function],
          "primary-200-a10": [Function],
          "primary-200-a100": [Function],
          "primary-200-a20": [Function],
          "primary-200-a25": [Function],
          "primary-200-a30": [Function],
          "primary-200-a40": [Function],
          "primary-200-a5": [Function],
          "primary-200-a50": [Function],
          "primary-200-a60": [Function],
          "primary-200-a70": [Function],
          "primary-200-a75": [Function],
          "primary-200-a80": [Function],
          "primary-200-a90": [Function],
          "primary-200-a95": [Function],
          "primary-300": [Function],
          "primary-300-a0": [Function],
          "primary-300-a10": [Function],
          "primary-300-a100": [Function],
          "primary-300-a20": [Function],
          "primary-300-a25": [Function],
          "primary-300-a30": [Function],
          "primary-300-a40": [Function],
          "primary-300-a5": [Function],
          "primary-300-a50": [Function],
          "primary-300-a60": [Function],
          "primary-300-a70": [Function],
          "primary-300-a75": [Function],
          "primary-300-a80": [Function],
          "primary-300-a90": [Function],
          "primary-300-a95": [Function],
          "primary-400": [Function],
          "primary-400-a0": [Function],
          "primary-400-a10": [Function],
          "primary-400-a100": [Function],
          "primary-400-a20": [Function],
          "primary-400-a25": [Function],
          "primary-400-a30": [Function],
          "primary-400-a40": [Function],
          "primary-400-a5": [Function],
          "primary-400-a50": [Function],
          "primary-400-a60": [Function],
          "primary-400-a70": [Function],
          "primary-400-a75": [Function],
          "primary-400-a80": [Function],
          "primary-400-a90": [Function],
          "primary-400-a95": [Function],
          "primary-50": [Function],
          "primary-50-a0": [Function],
          "primary-50-a10": [Function],
          "primary-50-a100": [Function],
          "primary-50-a20": [Function],
          "primary-50-a25": [Function],
          "primary-50-a30": [Function],
          "primary-50-a40": [Function],
          "primary-50-a5": [Function],
          "primary-50-a50": [Function],
          "primary-50-a60": [Function],
          "primary-50-a70": [Function],
          "primary-50-a75": [Function],
          "primary-50-a80": [Function],
          "primary-50-a90": [Function],
          "primary-50-a95": [Function],
          "primary-500": [Function],
          "primary-500-a0": [Function],
          "primary-500-a10": [Function],
          "primary-500-a100": [Function],
          "primary-500-a20": [Function],
          "primary-500-a25": [Function],
          "primary-500-a30": [Function],
          "primary-500-a40": [Function],
          "primary-500-a5": [Function],
          "primary-500-a50": [Function],
          "primary-500-a60": [Function],
          "primary-500-a70": [Function],
          "primary-500-a75": [Function],
          "primary-500-a80": [Function],
          "primary-500-a90": [Function],
          "primary-500-a95": [Function],
          "primary-600": [Function],
          "primary-600-a0": [Function],
          "primary-600-a10": [Function],
          "primary-600-a100": [Function],
          "primary-600-a20": [Function],
          "primary-600-a25": [Function],
          "primary-600-a30": [Function],
          "primary-600-a40": [Function],
          "primary-600-a5": [Function],
          "primary-600-a50": [Function],
          "primary-600-a60": [Function],
          "primary-600-a70": [Function],
          "primary-600-a75": [Function],
          "primary-600-a80": [Function],
          "primary-600-a90": [Function],
          "primary-600-a95": [Function],
          "primary-700": [Function],
          "primary-700-a0": [Function],
          "primary-700-a10": [Function],
          "primary-700-a100": [Function],
          "primary-700-a20": [Function],
          "primary-700-a25": [Function],
          "primary-700-a30": [Function],
          "primary-700-a40": [Function],
          "primary-700-a5": [Function],
          "primary-700-a50": [Function],
          "primary-700-a60": [Function],
          "primary-700-a70": [Function],
          "primary-700-a75": [Function],
          "primary-700-a80": [Function],
          "primary-700-a90": [Function],
          "primary-700-a95": [Function],
          "primary-800": [Function],
          "primary-800-a0": [Function],
          "primary-800-a10": [Function],
          "primary-800-a100": [Function],
          "primary-800-a20": [Function],
          "primary-800-a25": [Function],
          "primary-800-a30": [Function],
          "primary-800-a40": [Function],
          "primary-800-a5": [Function],
          "primary-800-a50": [Function],
          "primary-800-a60": [Function],
          "primary-800-a70": [Function],
          "primary-800-a75": [Function],
          "primary-800-a80": [Function],
          "primary-800-a90": [Function],
          "primary-800-a95": [Function],
          "primary-900": [Function],
          "primary-900-a0": [Function],
          "primary-900-a10": [Function],
          "primary-900-a100": [Function],
          "primary-900-a20": [Function],
          "primary-900-a25": [Function],
          "primary-900-a30": [Function],
          "primary-900-a40": [Function],
          "primary-900-a5": [Function],
          "primary-900-a50": [Function],
          "primary-900-a60": [Function],
          "primary-900-a70": [Function],
          "primary-900-a75": [Function],
          "primary-900-a80": [Function],
          "primary-900-a90": [Function],
          "primary-900-a95": [Function],
        }
      `)
    })
  })
})
