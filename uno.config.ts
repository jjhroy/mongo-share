// uno.config.ts
import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetUno from '@unocss/preset-uno';
import { presetWind } from 'unocss';
import presetAttributify from '@unocss/preset-attributify';

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      /* options */
    }),
    presetAttributify({
      /* preset options */
    }),
  ],
  shortcuts: {
    'flex-inline': 'flex flex-row items-center',
  },
});
