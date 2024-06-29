# tree

``` 
pages.json 路由 导航栏 tabBar
```

![img.png](img.png)

uni-tailwind
``` 
pnpm install --save-dev @uni-helper/vite-plugin-uni-tailwind autoprefixer postcss postcss-comment postcss-html postcss-import postcss-scss sass sass-loader tailwindcss


tailwind.config.js >>>>>>>>
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // 兼容小程序，将 : 替换成 __
  separator: '__',
  theme: {
    // 兼容小程序，将默认配置里带 .和/ 清除
  },
  variants: {},
  plugins: [],
  corePlugins: {
    // 兼容小程序，将带有 * 选择器的插件禁用
    preflight: false,
    space: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false
  }
};
>>>>>>>>>>>

postcss.config.js >>>>>>>>>>>
const path = require("path");
const comment = require("postcss-comment");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

module.exports = {
  parser: comment,
  plugins: [
    postcssImport({
      resolve(id, basedir, importOptions) {
        if (id.startsWith("~@/")) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(3));
        } else if (id.startsWith("@/")) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(2));
        } else if (id.startsWith("/") && !id.startsWith("//")) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substr(1));
        }
        return id;
      },
    }),
    tailwindcss({
      config: "./tailwind.config.js",
    }),
    autoprefixer({
      remove: true,
    }),
  ],
};
>>>>>>>>>>>>>>>>>

vite.config.ts >>>>>>>>>>>>>>>
import { defineConfig } from "vite";
import postcssConfig from './postcss.config'
import uni from "@dcloudio/vite-plugin-uni";
import uvtw from '@uni-helper/vite-plugin-uni-tailwind'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: postcssConfig,
  },
  plugins: [
    uni(),
    uvtw(),
  ],
});
>>>>>>>>>>>>>>>

配置完成后需要引入tailwindcss，注意不要在main.ts中引入，这会导致APP端不生效，需要在App.vue中引入

https://www.cnblogs.com/breezefaith/p/17976018
```

