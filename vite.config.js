// vite.config.ts

import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetWebFonts from "@unocss/preset-web-fonts";

export default {
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
          provider: "google", // default provider
          fonts: {
            // these will extend the default theme
            sans: "Roboto",
            mono: ["Fira Code", "Fira Mono:400,700"],
            // custom ones
            lobster: "Lobster",
            lato: [
              {
                name: "Noto sans",
                weights: ["400", "700"],
                italic: false,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
      rules: [
        // your custom rules
      ],
    }),
  ],
};
