import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/.expo/**',
      '**/.next/**',
      '**/dist/**',
      '**/.turbo/**',
      '**/.wrangler/**',
      '**/coverage/**',
      '**/build/**',
    ],
  },
  ...tseslint.configs.recommended,
);
