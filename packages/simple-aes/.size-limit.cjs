// @ts-check

const fullEsmMaxSize = "3080B";

/**
 * @link https://github.com/ai/size-limit/
 * @type {{name: string, path: string[], limit: string, import?: string, webpack?: boolean}[]}
 */
module.exports = [
  {
    name: "ESM (import everything *)",
    path: ["dist/index.js"],
    import: '*',
    webpack: false,
    limit: fullEsmMaxSize,
  },
];
