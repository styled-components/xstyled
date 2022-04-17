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

  it('allows to create high level variants', () => {
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
          $blueRounded: {
            $rounded: true,
            $color: 'blue',
          },
        },
      }),
    ).toEqual({
      color: 'blue',
      backgroundColor: 'azure',
      fontSize: '10px',
      borderRadius: '3px',
    })
  })
})
