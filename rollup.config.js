import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', exports: 'named' },
    { file: pkg.module, format: 'esm' },
  ],
  plugins: [babel()],
}
