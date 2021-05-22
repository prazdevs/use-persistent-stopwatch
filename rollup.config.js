import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const globals = {
  'vue-demi': 'VueDemi',
  '@vueuse/core': 'VueUse'
}

const configs = [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        name: pkg.name,
        format: "umd",
        globals,
      },
      {
        file: `dist/index.umd.min.js`,
        format: "umd",
        name: pkg.name,
        globals,
        plugins: [
          terser({
            format: {
              comments: false,
            },
          }),
        ],
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/index.esm.js",
        format: "es",
      },
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
    external: [...Object.keys(pkg.dependencies || {})],
  },
  {
    input: `src/index.ts`,
    output: {
      file: `dist/index.d.ts`,
      format: "es",
    },
    plugins: [dts()],
  }
]

export default configs