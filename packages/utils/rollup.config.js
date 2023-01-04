import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: ['esm', 'cjs'].map((format) => ({
    name: 'tts-controller',
    format,
    dir: 'dist',
    entryFileNames: `small-color-ui-utils.[format].js`,
    preserveModulesRoot: 'src',
  })),
  plugins: [typescript()],
};
