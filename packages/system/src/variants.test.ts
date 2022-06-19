import { system } from './styles'
import { withVariants } from './variants'

const systemWithVariants = withVariants(system)

describe('#variants', () => {
  it('allows to use variants', () => {
    expect(
      systemWithVariants({
        variants: {
          $color: {
            blue: { color: 'blue', bg: 'azure' },
            red: { color: 'red', bg: 'orange' },
          },
          $size: {
            big: { fontSize: 10 },
          },
          $rounded: {
            true: { borderRadius: 3 },
          },
        },
        $color: 'blue',
        $size: 'big',
        $rounded: true,
      }),
    ).toEqual({
      color: 'blue',
      backgroundColor: 'azure',
      fontSize: '10px',
      borderRadius: '3px',
    })
  })

  it('allows to create compound variants', () => {
    expect(
      systemWithVariants({
        variants: {
          $color: {
            blue: { color: 'blue', bg: 'azure' },
            red: { color: 'red', bg: 'orange' },
          },
          $size: {
            big: { fontSize: 10 },
          },
          $rounded: {
            true: { borderRadius: 3 },
          },
          $outlined: {
            true: {
              borderWidth: 2,
              borderStyle: 'solid',
            },
          },
        },
        compoundVariants: [
          {
            $color: 'blue',
            $outlined: true,
            css: {
              borderColor: 'blue',
            },
          },
        ],
        $color: 'blue',
        $outlined: true,
      }),
    ).toEqual({
      color: 'blue',
      backgroundColor: 'azure',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'blue',
    })
  })
})
