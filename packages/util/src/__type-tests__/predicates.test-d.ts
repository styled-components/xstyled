import {
  is,
  num,
  string,
  obj,
  func,
  negative,
  assign,
  merge,
  omit,
  cascade,
} from '../index'
import type { Path, Props, ITheme } from '../types'
import type { Expect, Equal, Assignable, NotAssignable } from './_helpers'

// -----------------------------------------------------------------------------
// Path / ITheme / Props are the public type surface.
// -----------------------------------------------------------------------------
export type _path_string = Expect<Assignable<Path, 'colors.primary'>>
export type _path_number = Expect<Assignable<Path, 1>>
export type _path_no_bool = Expect<NotAssignable<Path, true>>
export type _path_no_object = Expect<NotAssignable<Path, { a: 1 }>>

// `Props` defaults to `Props<ITheme>` and allows arbitrary string-keyed values.
export type _props_default = Expect<Assignable<Props, { foo: 1; bar: 'x' }>>

// -----------------------------------------------------------------------------
// `is(v)` narrows out `null | undefined`.
// -----------------------------------------------------------------------------
{
  const v: string | null | undefined = 'x' as string | null | undefined
  if (is(v)) {
    type _t = Expect<Equal<typeof v, string>>
    void (null as unknown as _t)
  }
}

// `is(v)` on a non-nullable input doesn't widen.
{
  const v: 1 | 2 | 3 = 1 as 1 | 2 | 3
  if (is(v)) {
    type _t = Expect<Equal<typeof v, 1 | 2 | 3>>
    void (null as unknown as _t)
  }
}

// -----------------------------------------------------------------------------
// `num(v)` narrows to `number`.
// -----------------------------------------------------------------------------
{
  const v: unknown = 1
  if (num(v)) {
    type _t = Expect<Equal<typeof v, number>>
    void (null as unknown as _t)
  }
}

// -----------------------------------------------------------------------------
// `string(v)` narrows to non-empty `string`.
// -----------------------------------------------------------------------------
{
  const v: unknown = 'x'
  if (string(v)) {
    type _t = Expect<Equal<typeof v, Exclude<string, ''>>>
    void (null as unknown as _t)
  }
}

// -----------------------------------------------------------------------------
// `obj`, `func`, `negative` narrow correctly.
// -----------------------------------------------------------------------------
{
  const v: unknown = {}
  if (obj(v)) {
    // obj narrows to a plain object type — at minimum it must be a record-like.
    type _t = Expect<Assignable<object, typeof v>>
    void (null as unknown as _t)
  }
}

{
  const v: unknown = () => null
  if (func(v)) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    type _t = Expect<Assignable<Function, typeof v>>
    void (null as unknown as _t)
  }
}

{
  const v: unknown = -1
  if (negative(v)) {
    type _t = Expect<Equal<typeof v, number>>
    void (null as unknown as _t)
  }
}

// -----------------------------------------------------------------------------
// `assign` / `merge` produce intersection types of source and target.
// -----------------------------------------------------------------------------
{
  const result = assign({ a: 1 }, { b: 'x' })
  type _t = Expect<Equal<typeof result, { a: number } & { b: string }>>
  void (null as unknown as _t)
}

{
  const result = merge({ a: 1 }, { b: 'x' })
  type _t = Expect<Equal<typeof result, { a: number } & { b: string }>>
  void (null as unknown as _t)
}

// -----------------------------------------------------------------------------
// `omit` keeps the input shape (the type signature is intentionally loose;
// we only assert the function is callable with the expected signature).
// -----------------------------------------------------------------------------
{
  const result = omit({ a: 1, b: 'x', c: true }, ['a'])
  type _t = Expect<Assignable<object, typeof result>>
  void (null as unknown as _t)
}

// -----------------------------------------------------------------------------
// `cascade` accepts any value and unknown args.
// -----------------------------------------------------------------------------
{
  const result = cascade(1)
  void result
  const result2 = cascade((x: number) => x * 2, 21)
  void result2
}

// -----------------------------------------------------------------------------
// Re-export types are not `never` / `any`.
// -----------------------------------------------------------------------------
export type _itheme_not_never = Expect<
  [ITheme] extends [never] ? false : true
>
