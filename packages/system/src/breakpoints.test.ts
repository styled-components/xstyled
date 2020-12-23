/* eslint-disable no-console */
import { breakpoints, up, down, between } from './breakpoints'

const props = {
  theme: {
    screens: {
      _: 0,
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
}
describe('#breakpoints', () => {
  it('converts breakpoints to style', () => {
    expect(breakpoints({ xs: { width: 10 } })(props)).toEqual([{ width: 10 }])
    expect(
      breakpoints({ xs: { width: 10 }, md: { width: 20 } })(props),
    ).toEqual([
      { width: 10 },
      '@media (min-width: 768px) {',
      { width: 20 },
      '}',
    ])
  })

  it('reads values from theme', () => {
    const theme = { screens: { xs: 10, md: 20 } }
    expect(breakpoints({ xs: { width: 10 } })({ theme })).toEqual([
      '@media (min-width: 10px) {',
      { width: 10 },
      '}',
    ])
    expect(
      breakpoints({ xs: { width: 10 }, md: { width: 20 } })({ theme }),
    ).toEqual([
      '@media (min-width: 10px) {',
      { width: 10 },
      '}',
      '@media (min-width: 20px) {',
      { width: 20 },
      '}',
    ])
  })
})

describe('#up', () => {
  it('applies style up to breakpoint', () => {
    expect(up('xs', 'xs')(props)).toBe('xs')
    expect(up('sm', 'sm')(props)).toEqual([
      '@media (min-width: 640px) {',
      'sm',
      '}',
    ])
    expect(up('md', 'md')(props)).toEqual([
      '@media (min-width: 768px) {',
      'md',
      '}',
    ])
    expect(up('lg', 'lg')(props)).toEqual([
      '@media (min-width: 1024px) {',
      'lg',
      '}',
    ])
    expect(up('xl', 'xl')(props)).toEqual([
      '@media (min-width: 1280px) {',
      'xl',
      '}',
    ])
  })
})

describe('#down', () => {
  it('applies style down to breakpoint', () => {
    expect(down('xl', 'xl')(props)).toEqual([
      '@media (max-width: 1279.98px) {',
      'xl',
      '}',
    ])
    expect(down('lg', 'lg')(props)).toEqual([
      '@media (max-width: 1023.98px) {',
      'lg',
      '}',
    ])
    expect(down('md', 'md')(props)).toEqual([
      '@media (max-width: 767.98px) {',
      'md',
      '}',
    ])
    expect(down('sm', 'sm')(props)).toEqual([
      '@media (max-width: 639.98px) {',
      'sm',
      '}',
    ])
    expect(down('xs', 'xs')(props)).toEqual(null)
  })
})

describe('#between', () => {
  it('applies style between breakpoints', () => {
    expect(between('xs', 'xs', 'xs-xs')(props)).toBe('xs-xs')
    expect(between('xs', 'sm', 'xs-sm')(props)).toEqual([
      '@media (max-width: 639.98px) {',
      'xs-sm',
      '}',
    ])
    expect(between('xs', 'md', 'xs-md')(props)).toEqual([
      '@media (max-width: 767.98px) {',
      'xs-md',
      '}',
    ])
    expect(between('xs', 'lg', 'xs-lg')(props)).toEqual([
      '@media (max-width: 1023.98px) {',
      'xs-lg',
      '}',
    ])
    expect(between('xs', 'xl', 'xs-xl')(props)).toEqual([
      '@media (max-width: 1279.98px) {',
      'xs-xl',
      '}',
    ])
    expect(between('sm', 'md', 'sm-md')(props)).toEqual([
      '@media (min-width: 640px) and (max-width: 767.98px) {',
      'sm-md',
      '}',
    ])
    expect(between('sm', 'lg', 'sm-lg')(props)).toEqual([
      '@media (min-width: 640px) and (max-width: 1023.98px) {',
      'sm-lg',
      '}',
    ])
    expect(between('sm', 'xl', 'sm-xl')(props)).toEqual([
      '@media (min-width: 640px) and (max-width: 1279.98px) {',
      'sm-xl',
      '}',
    ])
    expect(between('md', 'lg', 'md-lg')(props)).toEqual([
      '@media (min-width: 768px) and (max-width: 1023.98px) {',
      'md-lg',
      '}',
    ])
    expect(between('md', 'xl', 'md-xl')(props)).toEqual([
      '@media (min-width: 768px) and (max-width: 1279.98px) {',
      'md-xl',
      '}',
    ])
    expect(between('lg', 'xl', 'lg-xl')(props)).toEqual([
      '@media (min-width: 1024px) and (max-width: 1279.98px) {',
      'lg-xl',
      '}',
    ])
  })
})
