module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: 'red',
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: 'green',
        },
      },
      "dark",
      "light"
    ],
  },
}
