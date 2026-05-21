---
'@xstyled/styled-components': patch
---

Type-checks cleanly against `styled-components@6.4+`. 6.4 added an `AttrsKeys` generic to its `Styled` interface; the recursion through `.attrs(...)` inside `createStyled` now casts back to the 4-generic shape so the published `dist/index.d.ts` compiles whether consumers are on `^6.1.11` or `^6.4`.
