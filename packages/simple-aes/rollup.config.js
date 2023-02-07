/* eslint-disable sonarjs/no-duplicate-string */

import { createRequire } from 'node:module';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import externals from 'rollup-plugin-node-externals';
import {
  swc,
  defineRollupSwcOption,
  minify as swcMinify,
} from 'rollup-plugin-swc3';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const config = {
  distDir: './dist',
  ecmascriptLevel: '2020',
  sourceMap: false, // process.env.NODE_ENV === 'production',
  cache: false,
  extensions: ['.js', '.ts'],
  minify: false,
  external: [
    ...Object.keys(pkg?.dependencies ?? {}),
    ...Object.keys(pkg?.peerDependencies ?? {}),
  ],
};

/**
 * @param { boolean } minify
 */
const getDefaultRollupPlugins = (minify) => {
  return [
    swc(
      defineRollupSwcOption({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/,
        tsconfig: 'tsconfig.build.json',
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: false,
            jsx: false,
            dynamicImport: false,
            privateMethod: false,
            functionBind: false,
            exportDefaultFrom: false,
            exportNamespaceFrom: false,
            decorators: false,
            decoratorsBeforeExport: false,
            topLevelAwait: false,
            importMeta: false,
          },
          transform: null,
          target: `es${config.ecmascriptLevel}`,
          loose: false,
          externalHelpers: false,
          // Requires v1.2.50 or upper and requires target to be es2016 or upper.
          keepClassNames: true,
        },
      })
    ),
    ...(minify
      ? [
          swcMinify({
            module: true,
            mangle: true, // Mangling does not reduce size enough, let's keep clean
            ecma: config.ecmascriptLevel,
            compress: {
              drop_console: true,
              drop_debugger: true,
              dead_code: true,
            },
            format: {
              beautify: true,
            },
          }),
        ]
      : []),
  ];
};

export default () => [
  // ESM Compat
  {
    input: ['./src/index.ts'],
    external: config.external,
    plugins: [externals(), ...getDefaultRollupPlugins(config.minify)],
    output: {
      format: 'esm',
      preserveModules: true, // Will allow maximum tree-shakeability by bundlers such as webpack
      dir: `${config.distDir}`,
      entryFileNames: '[name].js',
      sourcemap: config.sourceMap,
    },
  },
  // Typings
  {
    input: './src/index.ts',
    output: {
      file: `${config.distDir}/types/index.d.ts`,
      format: 'es',
    },
    external: config.external,
    plugins: [
      externals(),
      dts({
        compilerOptions: {
          tsBuildInfoFile: './tsconfig.tsbuildinfo.dts',
        },
      }),
    ],
  },
];
