/* eslint-disable no-console */
import { breakpoints, up, down, between } from './breakpoints'

describe('#breakpoints', () => {
  it('converts breakpoints to style', () => {
    expect(breakpoints({ xs: { width: 10 } })({})).toEqual([{ width: 10 }])
    expect(breakpoints({ xs: { width: 10 }, md: { width: 20 } })({})).toEqual([
      { width: 10 },
      '@media (min-width: 768px) {',
      { width: 20 },
      '}',
    ])
  })

  it('reads values from theme', () => {
    const theme = { breakpoints: { xs: 10, md: 20 } }
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
    expect(up('xs', 'xs')({})).toBe('xs')
    expect(up('sm', 'sm')({})).toEqual([
      '@media (min-width: 576px) {',
      'sm',
      '}',
    ])
    expect(up('md', 'md')({})).toEqual([
      '@media (min-width: 768px) {',
      'md',
      '}',
    ])
    expect(up('lg', 'lg')({})).toEqual([
      '@media (min-width: 992px) {',
      'lg',
      '}',
    ])
    expect(up('xl', 'xl')({})).toEqual([
      '@media (min-width: 1200px) {',
      'xl',
      '}',
    ])
  })
})

describe('#down', () => {
  it('applies style down to breakpoint', () => {
    expect(down('xl', 'xl')({})).toEqual([
      '@media (max-width: 1199.98px) {',
      'xl',
      '}',
    ])
    expect(down('lg', 'lg')({})).toEqual([
      '@media (max-width: 991.98px) {',
      'lg',
      '}',
    ])
    expect(down('md', 'md')({})).toEqual([
      '@media (max-width: 767.98px) {',
      'md',
      '}',
    ])
    expect(down('sm', 'sm')({})).toEqual([
      '@media (max-width: 575.98px) {',
      'sm',
      '}',
    ])
    expect(down('xs', 'xs')({})).toEqual(null)
  })
})

describe('#between', () => {
  it('applies style between breakpoints', () => {
    expect(between('xs', 'xs', 'xs-xs')({})).toBe('xs-xs')
    expect(between('xs', 'sm', 'xs-sm')({})).toEqual([
      '@media (max-width: 575.98px) {',
      'xs-sm',
      '}',
    ])
    expect(between('xs', 'md', 'xs-md')({})).toEqual([
      '@media (max-width: 767.98px) {',
      'xs-md',
      '}',
    ])
    expect(between('xs', 'lg', 'xs-lg')({})).toEqual([
      '@media (max-width: 991.98px) {',
      'xs-lg',
      '}',
    ])
    expect(between('xs', 'xl', 'xs-xl')({})).toEqual([
      '@media (max-width: 1199.98px) {',
      'xs-xl',
      '}',
    ])
    expect(between('sm', 'md', 'sm-md')({})).toEqual([
      '@media (min-width: 576px) and (max-width: 767.98px) {',
      'sm-md',
      '}',
    ])
    expect(between('sm', 'lg', 'sm-lg')({})).toEqual([
      '@media (min-width: 576px) and (max-width: 991.98px) {',
      'sm-lg',
      '}',
    ])
    expect(between('sm', 'xl', 'sm-xl')({})).toEqual([
      '@media (min-width: 576px) and (max-width: 1199.98px) {',
      'sm-xl',
      '}',
    ])
    expect(between('md', 'lg', 'md-lg')({})).toEqual([
      '@media (min-width: 768px) and (max-width: 991.98px) {',
      'md-lg',
      '}',
    ])
    expect(between('md', 'xl', 'md-xl')({})).toEqual([
      '@media (min-width: 768px) and (max-width: 1199.98px) {',
      'md-xl',
      '}',
    ])
    expect(between('lg', 'xl', 'lg-xl')({})).toEqual([
      '@media (min-width: 992px) and (max-width: 1199.98px) {',
      'lg-xl',
      '}',
    ])
  })
})
