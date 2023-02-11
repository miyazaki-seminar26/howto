/* eslint-disable import/no-extraneous-dependencies */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
  important: '#__next',
  plugins: [],
};
