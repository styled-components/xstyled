# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.8.1](https://github.com/gregberge/xstyled/compare/v3.8.0...v3.8.1) (2024-05-08)

**Note:** Version bump only for package @xstyled/system

# [3.7.0](https://github.com/gregberge/xstyled/compare/v3.6.0...v3.7.0) (2022-10-05)

### Bug Fixes

- **cache:** fix object keys caching ([#383](https://github.com/gregberge/xstyled/issues/383)) ([879708c](https://github.com/gregberge/xstyled/commit/879708cde533066cd728027275014df776b9709d))
- fixed incomplete hex alpha value generation ([#373](https://github.com/gregberge/xstyled/issues/373)) ([fd0a097](https://github.com/gregberge/xstyled/commit/fd0a09781f7c2cc0eee5d59e485381e9f3fc1ed0))

### Features

- **cache:** add option to disable xstyled cache ([#379](https://github.com/gregberge/xstyled/issues/379)) ([738f882](https://github.com/gregberge/xstyled/commit/738f88229e7d3a144fb150be2c4ca71e514cda96))

# [3.6.0](https://github.com/gregberge/xstyled/compare/v3.5.1...v3.6.0) (2022-04-15)

### Bug Fixes

- move at-rules to end of nested responsive states ([6c7528e](https://github.com/gregberge/xstyled/commit/6c7528e46b2dccd934cf21ec12eb0f5076004e59)), closes [#288](https://github.com/gregberge/xstyled/issues/288)
- **types:** add missing types to the borders system utility ([#346](https://github.com/gregberge/xstyled/issues/346)) ([c0c92b4](https://github.com/gregberge/xstyled/commit/c0c92b459bb3a5de46d7854be3667861f816baa5))
- **types:** fix missing values in types ([#361](https://github.com/gregberge/xstyled/issues/361)) ([01afa25](https://github.com/gregberge/xstyled/commit/01afa252e9c34220c799142bfc42dc0a736e55d9)), closes [#355](https://github.com/gregberge/xstyled/issues/355)
- **types:** remove deep path autocompletion ([e01e8b3](https://github.com/gregberge/xstyled/commit/e01e8b3567bebe16c90f18676797160eb9a6466a))
- **typing:** Support any valid number for utility props that needs it ([#357](https://github.com/gregberge/xstyled/issues/357)) ([1fd72c6](https://github.com/gregberge/xstyled/commit/1fd72c6d97c469c4e7d24d900744c10e27a2a8e5))

### Features

- add ability to customize spacing properties in "texts" ([#351](https://github.com/gregberge/xstyled/issues/351)) ([57304c2](https://github.com/gregberge/xstyled/commit/57304c2fdf5c5eecd7dbceb218bd8da9ef9ab262)), closes [#350](https://github.com/gregberge/xstyled/issues/350)
- add outlineOffset property ([#360](https://github.com/gregberge/xstyled/issues/360)) ([4dac9a3](https://github.com/gregberge/xstyled/commit/4dac9a31c6b80bc66b6f28b0ea69c41a252c7a4d))
- added inline variants support ([#334](https://github.com/gregberge/xstyled/issues/334)) ([acfa364](https://github.com/gregberge/xstyled/commit/acfa364561a2fb69b07a2a3689baf5f3a345f028)), closes [#333](https://github.com/gregberge/xstyled/issues/333)
- **typing:** infer automatically the typing of the generators used inside of the compose ([#358](https://github.com/gregberge/xstyled/issues/358)) ([ecbae73](https://github.com/gregberge/xstyled/commit/ecbae7351280b93b7fbce02ab262e0dff5884cea))

## [3.5.1](https://github.com/gregberge/xstyled/compare/v3.5.0...v3.5.1) (2022-01-10)

### Bug Fixes

- fix missing files ([18a22cd](https://github.com/gregberge/xstyled/commit/18a22cd6bbf3ffac9b3df385eb169ca0364c8b45))

# [3.5.0](https://github.com/gregberge/xstyled/compare/v3.4.0...v3.5.0) (2022-01-10)

### Bug Fixes

- **esm:** fix module exports ([5624604](https://github.com/gregberge/xstyled/commit/56246046815ffab3d860a298c6c4bc62162c928d)), closes [#336](https://github.com/gregberge/xstyled/issues/336)

### Features

- add border positions style helpers ([3bcaada](https://github.com/gregberge/xstyled/commit/3bcaada8541af40cb40e9fbf691692cd597b8438))

# [3.2.0](https://github.com/gregberge/xstyled/compare/v3.1.2...v3.2.0) (2021-12-22)

### Bug Fixes

- FlexboxesProps missing FlexBasisProps ([#332](https://github.com/gregberge/xstyled/issues/332)) ([dbc531b](https://github.com/gregberge/xstyled/commit/dbc531b8dfc93ef516d190d5d51c951165ea5bee))

### Features

- export `styled` as a named export ([410cd67](https://github.com/gregberge/xstyled/commit/410cd679fc6c5c72b527c062bc88fb3d4dfe252c))

## [3.1.2](https://github.com/gregberge/xstyled/compare/v3.1.1...v3.1.2) (2021-11-05)

### Bug Fixes

- **system:** fix caching issue with value with different types ([4a6ded3](https://github.com/gregberge/xstyled/commit/4a6ded3c89e2822bac4c672e06c2e74a8f2c7141))

## [3.1.1](https://github.com/gregberge/xstyled/compare/v3.1.0...v3.1.1) (2021-10-30)

### Bug Fixes

- allow numeric values for systemprops ([efdefe1](https://github.com/gregberge/xstyled/commit/efdefe1ddcf481a10bac1f7473143ce140e34ca8))
- boolean or string for transform property type ([1498d86](https://github.com/gregberge/xstyled/commit/1498d8671af5b46357ae99ae85c4ed62213e065f))
- color prop missing responsive support ([65f532b](https://github.com/gregberge/xstyled/commit/65f532bd1bf2f1b2dbc56068ef8d943223d7b4ff))
- ensure the number is one of the keys ([c2f71fd](https://github.com/gregberge/xstyled/commit/c2f71fd5c01b2f8597c4de370c39486218aa291b))
- more correct synthesized type that allows number keys ([c31c6b1](https://github.com/gregberge/xstyled/commit/c31c6b11b024fd9e5b96640f51d8f2b0c0342bb8))
- move typography color fix to proper file ([5c635b0](https://github.com/gregberge/xstyled/commit/5c635b08f321ce5c81ca7c2dbb93d29ca7ab9b12))
- transform prop type should be string not boolean ([50c847e](https://github.com/gregberge/xstyled/commit/50c847eddf11bcfb770830e98bdacda3514f4889))

# [3.1.0](https://github.com/gregberge/xstyled/compare/v3.0.3...v3.1.0) (2021-10-02)

### Bug Fixes

- **types:** fix wrong type for ThemeVariants ([#301](https://github.com/gregberge/xstyled/issues/301)) ([b69619e](https://github.com/gregberge/xstyled/commit/b69619ed06bedfe6146df35e697a5c60a79aa4d5))

### Features

- **system:** add aria-disabled to the disabled state ([#297](https://github.com/gregberge/xstyled/issues/297)) ([d28cf38](https://github.com/gregberge/xstyled/commit/d28cf38425fef81c090cc95b47b62e2bfc440781))
- **typings:** assemble deep paths for autocompletion ([#310](https://github.com/gregberge/xstyled/issues/310)) ([9867158](https://github.com/gregberge/xstyled/commit/986715841c9c40c775d55ad54b8653165b2f1b71))

## [3.0.2](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v3.0.1...v3.0.2) (2021-06-18)

### Bug Fixes

- **breakpoints:** add \_ into breakpoints ([bcfda4b](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/bcfda4b77531487ac5a6b8c30b715dd2bcfd08bd)), closes [#277](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/277)
- **system:** fix rpx transformers ([339f7fc](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/339f7fcf59fb79b6e042564a03c07d40514a6c87)), closes [#274](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/274)
- move away from mjs extension to work in more environments ([9098b83](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/9098b83407888dea985081029dc93c18d5bb6eab))

# [2.5.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.4.1...v2.5.0) (2021-05-02)

### Bug Fixes

- **system:** fix paddingBottom typings ([#242](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/242)) ([ee01b9b](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/ee01b9b42bf5a4de58227780bf1fccb41c489d51))

### Features

- **style:** improve mixin ([#225](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/225)) ([66ac294](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/66ac294eb7fa0760bf75b1ac679e9e964397c915))

# [2.4.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.3.0...v2.4.0) (2021-03-28)

### Bug Fixes

- fix minW, minH, maxW, maxH ([#217](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/217)) ([65c04de](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/65c04deb8001835b4944fc9ac5dc34f2c7c64fab))

### Features

- add system.apply utility ([#218](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/218)) ([c32f714](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/c32f71489c506c095bc8fb75dc41add9be2fe300))

# [2.3.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.3...v2.3.0) (2021-03-23)

### Bug Fixes

- **types:** add missing alignContent prop ([eb3c47f](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/eb3c47f856166c2f3803025f88d1546f71f058ae)), closes [#205](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/205)

### Features

- add float property ([0335114](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/0335114280242a2554e300e565065e083459550f)), closes [#192](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/192)
- add maxW, maxH, minW, minH shortcuts ([fde802e](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/fde802ec0e73b6fb6826936c4bac072348c275b3)), closes [#199](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/199)
- **durations:** bind durations to `theme.durations` ([362dea3](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/362dea3284a7a9a951ba1b26822dceed78d2ed4d))
- **transform:** min/max widths in media queries ([aa1f518](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/aa1f518f26c098e30299b4fb1f36db95f1ccab86))

## [2.2.3](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.2...v2.2.3) (2021-02-13)

**Note:** Version bump only for package @xstyled/system

## [2.2.2](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.1...v2.2.2) (2021-02-03)

### Bug Fixes

- fix & optimize style sorting ([76ed20a](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/76ed20a122666c50e80a9b3ddcf32c467d7d6de7))

## [2.2.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.2.0...v2.2.1) (2021-01-31)

### Bug Fixes

- remove size utility ([#183](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/183)) ([3fb9239](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/3fb92397a4f2e9e824504c16f2a12e84c46637d6))

# [2.2.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.1.0...v2.2.0) (2021-01-18)

### Features

- **typings:** type of colors object being more specific ([#174](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/174)) ([379e54d](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/379e54d0bdb53a71dc013171aa0ebe8bf60af363))

# [2.1.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v2.0.0...v2.1.0) (2021-01-11)

### Bug Fixes

- size 0.5 conflict fluid range ([#168](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/168)) ([762aa1c](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/762aa1ccf6e4829d0664481a2be2e2ad2c4a0bf9))

## [1.19.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.19.0...v1.19.1) (2020-11-04)

### Bug Fixes

- **breakpoints:** multiple responsive style props ([#141](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/141)) ([b884076](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/b884076cec72cd89a9434616c22cb9e9468f656b))

# [1.19.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.18.1...v1.19.0) (2020-09-10)

### Features

- add `flexShrink` and `flexGrow` props ([#130](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/130)) ([9492a00](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/9492a0051c31648bb40ec3a11e5b9483e1488fcd))

## [1.17.2](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.17.1...v1.17.2) (2020-07-18)

**Note:** Version bump only for package @xstyled/system

## [1.17.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.17.0...v1.17.1) (2020-04-29)

**Note:** Version bump only for package @xstyled/system

# [1.17.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.16.0...v1.17.0) (2020-02-24)

### Features

- alias backgroundColor prop with bg ([c23bfff](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/c23bfff2875bb5856c218ddc8dfbdb7d61ad3c5a)), closes [#89](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/89)
- support fontStyle in props ([1777736](https://github.com/gregberge/xstyled/tree/master/packages/system/commit/17777366373c2f3ca864682f13158f6f3a962802)), closes [#91](https://github.com/gregberge/xstyled/tree/master/packages/system/issues/91)

# [1.16.0](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.15.1...v1.16.0) (2020-02-02)

**Note:** Version bump only for package @xstyled/system

## [1.15.1](https://github.com/gregberge/xstyled/tree/master/packages/system/compare/v1.15.0...v1.15.1) (2019-12-29)

**Note:** Version bump only for package @xstyled/system

# [1.14.0](https://github.com/gregberge/xstyled/compare/v1.13.1...v1.14.0) (2019-11-13)

### Features

- add useTheme & useUp / useDown ([36d2909](https://github.com/gregberge/xstyled/commit/36d290924d6cfaef97dd3144b4895ab944aa1f25))

# [1.11.0](https://github.com/gregberge/xstyled/compare/v1.10.1...v1.11.0) (2019-08-28)

### Features

- add support for text-shadow ([#49](https://github.com/gregberge/xstyled/issues/49)) ([96ef25a](https://github.com/gregberge/xstyled/commit/96ef25a))

# [1.10.0](https://github.com/gregberge/xstyled/compare/v1.9.1...v1.10.0) (2019-08-11)

### Features

- publish xstyled utilities as a separated package ([cc08d0f](https://github.com/gregberge/xstyled/commit/cc08d0f))

## [1.9.1](https://github.com/gregberge/xstyled/compare/v1.9.0...v1.9.1) (2019-08-11)

### Bug Fixes

- **system:** fix space resolution algo ([f50196b](https://github.com/gregberge/xstyled/commit/f50196b))

# [1.9.0](https://github.com/gregberge/xstyled/compare/v1.8.4...v1.9.0) (2019-08-09)

### Bug Fixes

- **system:** space nested values ([4119e8c](https://github.com/gregberge/xstyled/commit/4119e8c))

## [1.8.4](https://github.com/gregberge/xstyled/compare/v1.8.3...v1.8.4) (2019-07-15)

**Note:** Version bump only for package @xstyled/system

## [1.8.2](https://github.com/gregberge/xstyled/compare/v1.8.1...v1.8.2) (2019-07-09)

### Bug Fixes

- use React.forwardRef in createSystemComponent ([6c7da13](https://github.com/gregberge/xstyled/commit/6c7da13))

## [1.8.1](https://github.com/gregberge/xstyled/compare/v1.8.0...v1.8.1) (2019-07-09)

### Bug Fixes

- fix rpxTransformer => rpxTransformers ([2658a07](https://github.com/gregberge/xstyled/commit/2658a07))

# [1.8.0](https://github.com/gregberge/xstyled/compare/v1.7.0...v1.8.0) (2019-07-09)

### Features

- introduce configurable transformers ([4958bcb](https://github.com/gregberge/xstyled/commit/4958bcb))

# [1.7.0](https://github.com/gregberge/xstyled/compare/v1.6.0...v1.7.0) (2019-07-08)

### Features

- introduce rpx unit ([8bcc4cb](https://github.com/gregberge/xstyled/commit/8bcc4cb))

# [1.6.0](https://github.com/gregberge/xstyled/compare/v1.5.4...v1.6.0) (2019-07-08)

### Features

- introduce createSystemComponent to avoid undesired HTML attributes ([3187f68](https://github.com/gregberge/xstyled/commit/3187f68))

## [1.5.3](https://github.com/gregberge/xstyled/compare/v1.5.2...v1.5.3) (2019-07-07)

### Performance Improvements

- **system:** improve perf x4 ([996b773](https://github.com/gregberge/xstyled/commit/996b773))

## [1.5.2](https://github.com/gregberge/xstyled/compare/v1.5.1...v1.5.2) (2019-06-24)

### Bug Fixes

- fix double negative value with strings ([b254667](https://github.com/gregberge/xstyled/commit/b254667))

## [1.5.1](https://github.com/gregberge/xstyled/compare/v1.5.0...v1.5.1) (2019-06-22)

### Bug Fixes

- **emotion:** fix array handling used in breakpoints utilities ([e34d576](https://github.com/gregberge/xstyled/commit/e34d576)), closes [#29](https://github.com/gregberge/xstyled/issues/29)
- support negative values from theme objects ([4b03dfc](https://github.com/gregberge/xstyled/commit/4b03dfc)), closes [#27](https://github.com/gregberge/xstyled/issues/27)

# [1.5.0](https://github.com/gregberge/xstyled/compare/v1.4.0...v1.5.0) (2019-06-13)

### Features

- expose `getBreakpoints` ([b8dcc29](https://github.com/gregberge/xstyled/commit/b8dcc29))

# [1.4.0](https://github.com/gregberge/xstyled/compare/v1.3.0...v1.4.0) (2019-06-13)

### Features

- add xgrids (bootstrap like grids) ([47bcaff](https://github.com/gregberge/xstyled/commit/47bcaff))

# [1.3.0](https://github.com/gregberge/xstyled/compare/v1.2.0...v1.3.0) (2019-06-11)

**Note:** Version bump only for package @xstyled/system

# [1.2.0](https://github.com/gregberge/xstyled/compare/v1.1.1...v1.2.0) (2019-06-07)

### Features

- support emotion ([4b600a4](https://github.com/gregberge/xstyled/commit/4b600a4))

## [1.1.1](https://github.com/gregberge/xstyled/compare/v1.1.0...v1.1.1) (2019-06-03)

### Bug Fixes

- add border-width utility ([df4c47f](https://github.com/gregberge/xstyled/commit/df4c47f))

# [1.1.0](https://github.com/gregberge/xstyled/compare/v1.0.4...v1.1.0) (2019-06-03)

### Features

- add transitions ([be415b2](https://github.com/gregberge/xstyled/commit/be415b2))

## [1.0.4](https://github.com/gregberge/xstyled/compare/v1.0.3...v1.0.4) (2019-05-29)

**Note:** Version bump only for package @xstyled/system

## [1.0.2](https://github.com/gregberge/xstyled/compare/v1.0.1...v1.0.2) (2019-05-28)

**Note:** Version bump only for package @xstyled/system

## [1.0.1](https://github.com/gregberge/xstyled/compare/v1.0.0...v1.0.1) (2019-05-28)

### Bug Fixes

- stick to spec for sizes ([a7d4e01](https://github.com/gregberge/xstyled/commit/a7d4e01))
