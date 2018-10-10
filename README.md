# mst-decl-test-2

See: https://github.com/mobxjs/mobx-state-tree/issues/973#issuecomment-428773023


Sample project showing a complex model resulting in significant compile times and extremely bloated `*.d.ts` files generated when tsconfig `declarations` set to true, when converting a mst standalone  library project from mobx-state-tree 2.0.1 to 3.5. (compile time without declarations is fine)



to run, clone repro to a local dir, then from the root:
```
yarn (npm) install
yarn (npm run) build
```

using typescript `2.8.4` and statically referencing all types implied by the mst types declared in the models.

On my machine, this project compiles in **40+ seconds**.  Without declarations, compile time about 4 seconds.

Notice output in `dist/*.d.ts`, some of the files are excessive, paricularly models that reference other stores as types, and particularly when they're referenced with modifiers (like t.optional(t...., Store)).

Note: This code was pulled from a much larger system with several dependencies.  External dependencies were removed and a lot of the code is commented out and types changed to any so this will compile.  So, it won't really work as is; the focus here is simly compile time and declaration size.