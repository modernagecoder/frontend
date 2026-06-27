import { defineConfig } from 'tsup';

// Emits dist/index.js (ESM) + dist/index.d.ts. React stays external —
// the design-sync converter vendors React for the preview cards.
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  treeshake: true,
  sourcemap: false,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
});
