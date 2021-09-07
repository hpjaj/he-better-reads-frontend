/*
  @see https://tailwindcss.com/docs/guides/create-react-app
  @see https://tailwindcss.com/docs/configuration
  @see https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        3: "3px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
