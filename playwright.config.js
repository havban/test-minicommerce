import { existsSync } from 'node:fs'
import { defineConfig, devices } from '@playwright/test'

// Use a pre-installed Chromium (no `playwright install`).
// Override with CHROMIUM_PATH; defaults to /opt/pw-browsers/chromium when present,
// otherwise Playwright's own browser cache is used.
const chromiumPath =
  process.env.CHROMIUM_PATH ||
  (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined)

// Dedicated port so the tests never attach to some other app on :8080.
const port = Number(process.env.E2E_PORT || 5199)
const baseURL = `http://localhost:${port}`

export default defineConfig({
  testDir: './tests/integration',
  testMatch: '**/*.spec.js',
  snapshotPathTemplate: '{testDir}/__screenshots__/{testFilePath}/{arg}{ext}',
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: chromiumPath ? { executablePath: chromiumPath } : {}
      }
    }
  ],
  webServer: {
    command: `bun --bun vite --port ${port} --strictPort`,
    url: baseURL,
    reuseExistingServer: false,
    timeout: 60_000
  }
})
