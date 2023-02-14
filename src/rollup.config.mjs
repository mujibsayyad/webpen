import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: './editor.mjs',
  output: {
    file: './components/CodeMirror.jsx',
    format: 'iife',
  },
  plugins: [nodeResolve()],
};
