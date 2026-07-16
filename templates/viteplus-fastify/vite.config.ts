import { defineConfig } from 'vite-plus';

export default defineConfig({
  staged: {
    '*': 'vp check --fix',
  },
  pack: {
    // Entry point
    entry: 'src/server.ts',

    // Output configuration
    format: 'esm',
    outDir: 'dist',
    platform: 'node',

    // Use unbundle mode for better module structure
    unbundle: true,

    // Application server builds do not publish declaration files.
    dts: false,

    // Environment variables
    env: {
      NODE_ENV: process.env.NODE_ENV || 'development',
      APP_REGION: process.env.APP_REGION || 'sg',
      APP_ENV: process.env.APP_ENV || 'development',
    },

    deps: {
      // External dependencies (don't bundle these)
      neverBundle: [
        'fastify',
        '@fastify/autoload',
        '@fastify/swagger',
        '@fastify/swagger-ui',
        '@fastify/static',
        '@fastify/cors',
        '@fastify/vite',
        'dayjs',
        'ioredis',
        'knex',
        'lodash',
        'mysql',
        'uuid',
        'pino-pretty',
      ],
    },

    // Enable shims for __dirname and __filename in ESM
    shims: true,

    // Clean output directory before build
    clean: true,

    // Source maps for debugging
    sourcemap: true,

    // Target ES2022 for modern Node.js
    target: 'node18',

    // Copy static files if any
    copy: [{ from: 'public', to: 'dist/public' }],
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
