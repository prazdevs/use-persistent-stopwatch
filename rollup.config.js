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
        exports: 'auto',
      },
      {
        file: `dist/index.umd.min.js`,
        format: "umd",
        name: pkg.name,
        globals,
        exports: 'auto',
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
        exports: 'auto',
      },
      {
        file: "dist/index.esm.js",
        format: "es",
        exports: 'auto',
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