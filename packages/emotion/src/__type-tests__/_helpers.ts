export type Expect<T extends true> = T

export type Equal<A, B> = (<X>() => X extends A ? 1 : 2) extends <
  X,
>() => X extends B ? 1 : 2
  ? true
  : false

export type Assignable<T, V> = [V] extends [T] ? true : false
export type NotAssignable<T, V> = Assignable<T, V> extends true ? false : true
export type IsNever<T> = [T] extends [never] ? true : false
