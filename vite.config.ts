import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import react from '@vitejs/plugin-react'
import {createHash} from "node:crypto";

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    minify: true,
    /*rollupOptions: {

    }*/
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
      },
    },
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: function (name, filename) {
        const myHash = createHash('sha256').update(filename).digest("hex").slice(0, 5);
        let componentName = path.basename(filename, ".module.scss");

        if (name.startsWith('root')) {
          const hasRootModifier = name[4] === '_';

          if (hasRootModifier) {
            return `${componentName}${name.replace('root', '')}-${myHash}`;
          }

          return `${componentName}-${myHash}`;
        }
        return name;
      },
    }
  },
})
