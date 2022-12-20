import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import commonjs from '@rollup/plugin-commonjs';

import autoprefixer from 'autoprefixer';
import flexbugs from 'postcss-flexbugs-fixes';

export default {
  input: './src/Avatar.tsx',
  output: {
    file: 'dist/Avatar.js',
    format: 'es'
  },
  external: ['react'],
  plugins: [
    postcss({
      plugins: [autoprefixer(), flexbugs()],
      // extract: 'avatar.css',
      minimize: true,
    }),
    resolve(),
    json(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ['**/*.stories.*', '**/*.test.*'],
      },
      clean: true,
      tsconfig: './tsconfig.json',
    }),
    commonjs({
      exclude: 'node_modules',
      ignoreGlobal: true,
    }),
  ]
}