import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'c8'
    },
    environment: 'happy-dom',
    setupFiles: ['tests/setup.ts']
  }
})
