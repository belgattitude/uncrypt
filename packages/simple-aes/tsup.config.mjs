import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    splitting: true,
    clean: true,
    dts: true,
    format: ['esm', 'cjs'],
    outExtension({ format }) {
      return {
        js: `.${format === 'cjs' ? 'cjs' : 'mjs'}`,
      };
    },
    platform: 'node',
    target: ["node16", "es2020"],
    tsconfig: './tsconfig.build.json',
    sourcemap: !options.watch,
    minify: !options.watch,
  };
});
