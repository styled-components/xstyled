---
'@xstyled/system': patch
'@xstyled/emotion': patch
---

Module load and one-off `compose()` calls are noticeably faster on systems with many composed style generators. Per-render style application is unchanged.

Theme-aware function interpolations inside `css\`…\`` templates (for example `` css`color: ${(props) => props.theme.colors.primary};` ``) are now correctly typed.
