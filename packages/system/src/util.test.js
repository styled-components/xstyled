/* eslint-disable no-console */
import {
  is,
  num,
  string,
  obj,
  func,
  negative,
  get,
  merge,
  cascade,
  getThemeValue,
} from './util'

describe('util', () => {
  describe('#is', () => {
    it('tests if a value is not undefined and not null', () => {
      expect(is(undefined)).toBe(false)
      expect(is(null)).toBe(false)
      expect(is()).toBe(false)
      expect(is(0)).toBe(true)
      expect(is('')).toBe(true)
    })
  })

  describe('#num', () => {
    it('tests if a value is a valid number', () => {
      expect(num(undefined)).toBe(false)
      expect(num(null)).toBe(false)
      expect(num('')).toBe(false)
      expect(num('1')).toBe(false)
      expect(num(NaN)).toBe(false)
      expect(num(0)).toBe(true)
      expect(num(1)).toBe(true)
    })
  })

  describe('#string', () => {
    it('tests if a value is a non-empty string', () => {
      expect(string(undefined)).toBe(false)
      expect(string(null)).toBe(false)
      expect(string(1)).toBe(false)
      expect(string({})).toBe(false)
      expect(string('')).toBe(false)
      expect(string('1')).toBe(true)
    })
  })

  describe('#obj', () => {
    it('tests if a value is a plain object', () => {
      expect(obj(undefined)).toBe(false)
      expect(obj(null)).toBe(false)
      expect(obj({})).toBe(true)
      expect(obj([])).toBe(true)
    })
  })

  describe('#func', () => {
    it('tests if a value is a function', () => {
      expect(func(undefined)).toBe(false)
      expect(func(null)).toBe(false)
      expect(func({})).toBe(false)
      expect(func([])).toBe(false)
      expect(func(() => {})).toBe(true)
    })
  })

  describe('#negative', () => {
    it('tests if a value is negative', () => {
      expect(negative(undefined)).toBe(false)
      expect(negative(null)).toBe(false)
      expect(negative([])).toBe(false)
      expect(negative(() => {})).toBe(false)
      expect(negative('0')).toBe(false)
      expect(negative('-1')).toBe(false)
      expect(negative(0)).toBe(false)
      expect(negative(1)).toBe(false)
      expect(negative(-1)).toBe(true)
    })
  })

  describe('#get', () => {
    it('gets a value in an object', () => {
      expect(get({ foo: 'bar' }, 'foo')).toBe('bar')
      expect(get({ foo: 'bar' }, 'xxx')).toBe(undefined)
      expect(get(['a', 'b', 'c'], '1')).toBe('b')
      expect(get(['a', 'b', 'c'], '5')).toBe(undefined)

      const ar = ['a', 'b', 'c']
      ar.foo = 'bar'

      expect(get(ar, 'foo')).toBe('bar')
    })

    it('gets a value in a nested object', () => {
      expect(get({ a: { b: { c: 'hello' } } }, 'a.b.c')).toBe('hello')
      expect(get({ a: { b: { c: [0, 4, 8] } } }, 'a.b.c.2')).toBe(8)
    })
  })

  describe('#merge', () => {
    it('merges an item into another', () => {
      const a = { x: 1 }
      const b = { y: 2 }
      const result = merge(a, b)
      expect(result).toEqual({ x: 1, y: 2 })
    })

    it('returns the first one if the second is not defined', () => {
      const a = { x: 1 }
      const result = merge(a, null)
      expect(result).toBe(a)
    })
  })

  describe('#cascade', () => {
    it('calls function until it is not one', () => {
      expect(cascade(() => () => () => () => 'bar')).toBe('bar')
    })
  })

  describe('#getThemeValue', () => {
    it('gets a value from the theme', () => {
      expect(getThemeValue({}, 'foo')).toBe(undefined)
      expect(getThemeValue({ theme: { foo: 'bar' } }, 'foo')).toBe('bar')
      expect(getThemeValue({ theme: { foo: 'bar' } }, 'x')).toBe(undefined)
    })

    it('starts from the initial value specified', () => {
      expect(
        getThemeValue({ theme: { other: 'x' } }, 'foo', {
          foo: p => p.theme.other,
        }),
      ).toBe('x')
    })
  })
})
