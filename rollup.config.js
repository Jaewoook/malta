import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript'
import url from 'rollup-plugin-url'

import pkg from './package.json'

export default {
  input: './src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: ['react', 'styled-components'],
  plugins: [
    external(),
    postcss({
      modules: true
    }),
    url(),
    babel(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/classnames/index.js': ['classnames'],
        'node_modules/react/index.js': ['Children', 'Component', 'PropTypes', 'cloneElement', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react-is/index.js': ['isValidElementType']
      }
    }),
    typescript()
  ]
}
