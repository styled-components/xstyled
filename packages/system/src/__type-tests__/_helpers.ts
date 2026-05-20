/**
 * Type-level test helpers. These files are excluded from the runtime build
 * and from jest; they are only compiled by `yarn check:types` against the
 * `tsconfig.types.json` project.
 *
 * Positive assertions use `Expect<Equal<...>>` or `Expect<Assignable<...>>`
 * at the type level; negative assertions use `// @ts-expect-error` at the
 * value level so the test fails if the rejection ever stops working.
 */

export type Expect<T extends true> = T

export type Equal<A, B> = (<X>() => X extends A ? 1 : 2) extends <
  X,
>() => X extends B ? 1 : 2
  ? true
  : false

export type NotEqual<A, B> = Equal<A, B> extends true ? false : true

export type Assignable<T, V> = [V] extends [T] ? true : false

export type NotAssignable<T, V> = Assignable<T, V> extends true ? false : true

export type Extends<A, B> = A extends B ? true : false

export type IsNever<T> = [T] extends [never] ? true : false

export type IsAny<T> = 0 extends 1 & T ? true : false
