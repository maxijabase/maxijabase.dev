module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
        },
      },
      "dark",
      "light"
    ],
  },
}
