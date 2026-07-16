import { defineConfig } from 'vite-plus';

export default defineConfig({
  test: {
    include: ['__root_tests__/**/*.test.ts'],
    passWithNoTests: true,
  },
  fmt: {
    singleQuote: true,
  },
  lint: {
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
});
