import { readFileSync } from 'fs';
import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import typescriptEngine from 'typescript';

import { codecovRollupPlugin } from "@codecov/rollup-plugin";

const packageJson = JSON.parse(readFileSync('./package.json'));

export default defineConfig(
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
        name: packageJson.name,
      },
      {
        file: packageJson.module,
        format: 'es',
        exports: 'named',
        sourcemap: false,
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        typescript: typescriptEngine,
        sourceMap: false,
        exclude: [
          'coverage',
          '.storybook',
          'storybook-static',
          'config',
          'dist',
          'node_modules/**',
          '*.cjs',
          '*.mjs',
          '**/__snapshots__/*',
          '**/__tests__',
          '**/*.test.js+(|x)',
          '**/*.test.ts+(|x)',
          '**/*.mdx',
          '**/*.story.ts+(|x)',
          '**/*.story.js+(|x)',
          '**/*.stories.ts+(|x)',
          '**/*.stories.js+(|x)',
          'setupTests.ts',
          'vitest.config.ts',
        ],
      }),
      codecovRollupPlugin({
        enableBundleAnalysis: process.env.CODECOV_TOKEN !== undefined,
        bundleName: "recurrence-rule-builder",
        uploadToken: process.env.CODECOV_TOKEN,
      }), 
    ],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(sc|sa|c)ss$/],
    plugins: [dts()],
  },
);