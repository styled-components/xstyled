import { generateHexAlphaVariants } from './theme'

describe('#theme', () => {
  describe('#generateHexAlphaVariants', () => {
    it('generates colors with default alpha', () => {
      const colors = generateHexAlphaVariants({
        white: '#ffffff',

        'blue-gray-500': '#64748b',
      })

      expect(colors).toEqual({
        white: '#ffffff',
        'white-a0': '#ffffff0',
        'white-a5': '#ffffffd',
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
        'blue-gray-500-a0': '#64748b0',
        'blue-gray-500-a5': '#64748bd',
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
        'blue-gray-500-a1': '#64748b3',
        'blue-gray-500-a2': '#64748b5',
        'blue-gray-500-a3': '#64748b8',
      })
    })
  })
})
