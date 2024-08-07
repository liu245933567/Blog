import { defineConfig, presetUno, presetIcons } from 'unocss';

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,ts,tsx,vue,md}'],
  },
  presets: [
    presetUno(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
  ],

  rules: [
    [
      'no-scrollbar',

      {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    ],
  ],

  // ...UnoCSS options
  theme: {
    colors: {
      'bg-alt': 'var(--vp-c-bg-alt)',
      brand: 'var(--vp-c-brand)',
    },
  },
});
