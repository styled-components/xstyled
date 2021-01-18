import { generateHexAlphaVariants } from './theme'

describe('#theme', () => {
  describe('#generateHexAlphaVariants', () => {
    it('generates colors with default alpha', () => {
      const colors = generateHexAlphaVariants({
        white: '#ffffff',
        black: '#000000',
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

        black: '#000000',
        'black-a0': '#0000000',
        'black-a5': '#000000d',
        'black-a20': '#00000033',
        'black-a25': '#00000040',
        'black-a30': '#0000004d',
        'black-a40': '#00000066',
        'black-a10': '#0000001a',
        'black-a50': '#00000080',
        'black-a60': '#00000099',
        'black-a70': '#000000b3',
        'black-a75': '#000000bf',
        'black-a80': '#000000cc',
        'black-a90': '#000000e6',
        'black-a95': '#000000f2',
        'black-a100': '#000000ff',
      })
    })

    it('generates colors with custom alpha', () => {
      const colors = generateHexAlphaVariants(
        {
          white: '#ffffff',
          black: '#000000',
        },
        [1, 2, 3],
      )

      expect(colors).toEqual({
        white: '#ffffff',
        'white-a1': '#ffffff3',
        'white-a2': '#ffffff5',
        'white-a3': '#ffffff8',

        black: '#000000',
        'black-a1': '#0000003',
        'black-a2': '#0000005',
        'black-a3': '#0000008',
      })
    })
  })
})
