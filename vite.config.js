import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default ({ command, mode }) => {
  return defineConfig({
    plugins: [vue(), vueJsx(), VitePWA({})],
    assetsInclude: ["**/*.png"],
    // 打包配置
    build: {
      target: "modules",
      outDir: "dist", //指定输出路径
      assetsDir: "assets", // 指定生成静态资源的存放路径
      minify: "terser", // 混淆器，terser构建后文件体积更小
    },
  });
};
