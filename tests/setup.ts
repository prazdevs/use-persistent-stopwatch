import { Vue2, install, isVue2 } from 'vue-demi'
import { vi } from 'vitest'

if (isVue2) {
  Vue2.config.productionTip = false
  Vue2.config.devtools = false
  install(Vue2)
}

let state: Record<string, unknown> = {}

const localStorageMock = {
  getItem: vi.fn(x => state[x]),
  setItem: vi.fn((x, v) => state[x] = v),
  removeItem: vi.fn((x, v) => delete state[x]),
  clear: vi.fn(() => state = {}),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})
