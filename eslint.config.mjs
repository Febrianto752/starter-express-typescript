import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import ImportPlugin from 'eslint-plugin-import';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-fallthrough': 'off',
      'no-var': 'error', // Pastikan penggunaan let/const bukan var
      'prefer-const': 'warn', // Prefer const jika variabel tidak di-assign ulang
      'import/no-commonjs': 'error', // Larang penggunaan module.exports dan require()
      'import/prefer-default-export': 'warn', // Prefer penggunaan export default jika hanya ada satu ekspor
      '@typescript-eslint/no-explicit-any': 'warn'
    },
    plugins: {
      import: ImportPlugin
    }
  },
  {
    ignores: [
      'node_modules/*',
      'build/**/*' // ignore all contents in and under `build/` directory but not the `build/` directory itself
    ]
  }
];
