import vue from '@vitejs/plugin-vue';
import path from 'path';
import { AliasOptions, defineConfig } from 'vite';

let alias: AliasOptions;
if (process.env.APP_ENV === 'development') {
  alias = [
    { find: /^@monorepo-lib-example\/vue$/, replacement: path.resolve(__dirname, '../@monorepo-lib-example-vue/src/index') },
    { find: /^@monorepo-lib-example\/vue\/dist\/style\.css/, replacement: path.resolve(__dirname, '../@monorepo-lib-example-vue/src/style.css') }
  ];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/monorepo-ui-lib/',
  resolve: {
    alias
  },
})
