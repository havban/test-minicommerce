# test-minicommerce

Vue 3 + Vite mini-commerce demo (PWA via `vite-plugin-pwa`), Vuex 4, Vue Router, axios with an in-app mock API (`src/api-mock`).

Requires [Bun](https://bun.sh).

## Project setup
```
bun install
```

### Compiles and hot-reloads for development (http://localhost:8080)
```
bun run serve
```

### Compiles and minifies for production
```
bun run build
```

### Serve the production build (http://localhost:8080)
```
bun run start
```

### Run your unit tests (Vitest)
```
bun run test:unit
```

### Run the integration tests (Playwright, Chromium)
```
bun run test
```
Playwright starts its own dev server on port 5199 (override with `E2E_PORT`).
No `playwright install` is needed when a Chromium is already available: the config uses
`CHROMIUM_PATH` if set, otherwise `/opt/pw-browsers/chromium` when it exists, otherwise
Playwright's own browser cache. Screenshot baselines live in
`tests/integration/__screenshots__`; refresh them with `bun run test:update-snapshots`.

### Lints files
```
bun run lint
```

### Security audit
```
bun audit
```

### Customize configuration
See [Vite Configuration Reference](https://vite.dev/config/).
