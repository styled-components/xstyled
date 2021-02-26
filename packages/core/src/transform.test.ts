import { transform } from './transform'

const props = {
  theme: {
    screens: { sm: 0, md: 1024, lg: 1920 },
    colors: { black: '#000' },
  },
}

const transformToStr = (s) =>
  transform(s)
    .map((x) => (typeof x === 'function' ? x(props) : x))
    .join('')

describe('#transform', () => {
  it('replaces name/value pair with various whitespace', () => {
    expect(transformToStr('color:black;')).toBe('color:#000;')
    expect(transformToStr(' color : black ; ')).toBe(' color : #000 ; ')
  })

  it('replaces name/value pair within rule', () => {
    expect(transformToStr('.my-class { color: black; }')).toBe(
      '.my-class { color: #000; }',
    )
  })

  it('handles !important', () => {
    expect(transformToStr('color: black !important;')).toBe(
      'color: #000 !important;',
    )
  })

  it("isn't confused by comments", () => {
    expect(transformToStr('/* hi */color:black;')).toBe('/* hi */color:#000;')
  })

  it('transforms min-width media query', () => {
    expect(transformToStr('@media (min-width: md) {}')).toBe(
      '@media (min-width: 1024px) {}',
    )
  })

  it('transforms max-width media query', () => {
    expect(transformToStr('@media (max-width: md) {}')).toBe(
      '@media (max-width: 1023.98px) {}',
    )
  })

  it('transforms mixed media query', () => {
    expect(
      transformToStr(
        '@media screen and (min-width: md) and (color) and (not (max-width: lg)) {}',
      ),
    ).toBe(
      '@media screen and (min-width: 1024px) and (color) and (not (max-width: 1919.98px)) {}',
    )
  })

  it('transforms smallest value media query', () => {
    expect(transformToStr('@media (min-width: sm) {}')).toBe(
      '@media (min-width: 0) {}',
    )
  })

  it('handles mixed media query and rules', () => {
    expect(
      transformToStr(
        'div{color:black;}@media(min-width:lg){div{color:black;}}div{color:black;}',
      ),
    ).toBe(
      'div{color:#000;}@media(min-width:1920px){div{color:#000;}}div{color:#000;}',
    )
  })
})
