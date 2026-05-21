---
'@xstyled/babel-preset-emotion-css-prop': patch
---

Bumps `@emotion/babel-plugin-jsx-pragmatic` floor from `^0.2.0` to `^0.3.0`. Consumer carets wouldn't have picked the `0.3.x` line up automatically (semver treats 0.y bumps as breaking), so the floor change is required to land the latest. No API change in the plugin; build and test output are unchanged.
