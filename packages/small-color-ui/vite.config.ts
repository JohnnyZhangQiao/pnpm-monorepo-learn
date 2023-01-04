import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import type { OutputOptions } from 'rollup';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'modules',
    //打包文件目录
    outDir: 'dist',
    //压缩
    minify: false,
    //css分离
    cssCodeSplit: false,
    // rbga色值禁止转成十六进制
    cssTarget: 'chrome61',
    lib: {
      entry: './src/App.tsx',
      formats: ['es', 'cjs'],
      name: 'small-color-ui-core',
    },
    rollupOptions: {
      // 排除打包的库
      external: ['react', 'react-dom'],
      input: ['./src/App.tsx'],
      output: ['esm', 'cjs'].map((format) => ({
        name: 'small-color-ui',
        format,
        dir: 'dist',
        entryFileNames: `small-color-ui.[format].js`,
        assetFileNames: 'index.css',
        preserveModulesRoot: 'src',
      })) as OutputOptions[],
    },
  },
});
