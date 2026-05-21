---
'@xstyled/babel-preset-emotion-css-prop': patch
---

Bumps two runtime dep floors so the installed surface matches what's been tested:

- `@emotion/babel-plugin-jsx-pragmatic` `^0.2.0` → `^0.3.0`. Consumer carets wouldn't have picked the 0.3.x line up automatically (semver treats 0.y bumps as breaking), so the floor change is required to land the latest.
- `@babel/plugin-transform-react-jsx` `^7.19.0` → `^7.28.0`. Caret resolution would already reach 7.28.x; bumping the floor makes that the supported minimum.

Build and snapshot tests are unchanged; the plugin surfaces are identical at the versions involved.
