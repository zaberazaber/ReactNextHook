// rollup.config.js

import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    nodeResolve(), // This line uses the plugin
    commonjs(),    // To handle CommonJS modules
    typescript(),  // To transpile TypeScript files
    nodeResolve({
      browser: true, // This resolves imports for the browser environment
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
  ],
  external: ['react', 'react-dom'], // Exclude peer dependencies
};
