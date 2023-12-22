// uno.config.ts
import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      /* options */
    }),
    presetAttributify({
      /* preset options */
    }),
  ],
});
