import { transform } from './transform'

const props = { theme: { colors: { black: '#000' } } }

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
})
