// @flow
import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

const cwd = process.cwd()
const filename = path.resolve(cwd, '__fixtures__', 'app', 'reducer.js')
const output = path.resolve(cwd, 'reducer.js')

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename },
  pluginOptions: { input: '__fixtures__/**/reducer.js', output },
  tests: [
    {
      title: 'options',
      code: `// @flow`,
    },
    {
      title: 'no parse',
      code: `// @flow
      const state = { ...state, a: 1}
      `,
    },
  ],
})

pluginTester({
  plugin,
  babelOptions: { filename },
  snapshot: true,
  pluginOptions: {
    input: '../**/reducer.js',
    output,
    globOptions: { cwd: __dirname },
  },
  tests: [
    {
      title: 'glob options',
      code: `// show options`,
    },
  ],
})

pluginTester({
  plugin,
  babelOptions: { filename },
  tests: [
    {
      title: 'error',
      code: `// throw error`,
      error: /require input option/,
    },
  ],
})

pluginTester({
  plugin,
  babelOptions: { filename },
  pluginOptions: { input: '__fixtures__/**/*.js' },
  tests: [
    {
      title: 'error',
      code: `// throw error`,
      error: /require output option/,
    },
  ],
})