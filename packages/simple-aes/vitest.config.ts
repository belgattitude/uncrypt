import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const testFiles = ['./src/**/*.test.{js,ts}', './test/**/*.test.{js,ts}'];

export default defineConfig({
  plugins: [tsconfigPaths()],
  esbuild: {
    target: ['node16'],
  },
  test: {
    globals: true,
    environment: 'node',
    passWithNoTests: false,
    setupFiles: './test/_setup/setupVitest.ts',
    cache: {
      dir: '../../.cache/vitest/uncrypt',
    },
    coverage: {
      provider: 'v8',
      reporter: ['json', 'clover'],
      extension: ['js', 'jsx', 'ts', 'tsx'],
    },
    include: testFiles,
    exclude: [
      '**/node_modules/**',
      'dist/**',
      '**/coverage/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
});
