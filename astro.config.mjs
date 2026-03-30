// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { createLogger } from "vite";

const viteLogger = createLogger();
const viteLoggerWarn = viteLogger.warn;
viteLogger.warn = (msg, options) => {
  if (
    typeof msg === "string" &&
    msg.includes('"matchHostname", "matchPathname", "matchPort" and "matchProtocol"') &&
    msg.includes("node_modules/astro/dist/assets/utils/index.js")
  ) {
    return;
  }
  viteLoggerWarn(msg, options);
};
// https://astro.build/config
export default defineConfig({
  site: "https://taigraphics.nl",
  base: '/',
  integrations: [sitemap()],
  vite: {
    customLogger: viteLogger,
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          const message = typeof warning.message === "string" ? warning.message : "";
          const id = typeof warning.id === "string" ? warning.id : "";
          const isKnownAstroNoise =
            message.includes('"matchHostname", "matchPathname", "matchPort" and "matchProtocol"') &&
            message.includes("never used") &&
            id.includes("node_modules/astro/dist/assets/utils/index.js");

          if (isKnownAstroNoise) return;
          warn(warning);
        },
      },
    },
  },
});