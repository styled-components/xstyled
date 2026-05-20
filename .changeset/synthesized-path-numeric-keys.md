---
'@xstyled/system': patch
'@xstyled/styled-components': patch
'@xstyled/emotion': patch
---

Themes with numeric keys (for example `{ blue: { 50: '#…', 100: '#…' } }`) now produce precise string-literal types like `'blue.50' | 'blue.100'` instead of silently dropping out of the union. Deeply nested themes also type-check cleanly without producing "union too complex" errors.
