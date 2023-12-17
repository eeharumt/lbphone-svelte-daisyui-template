/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark",], // oklch で指定できないためテーマ反映できない
    base: false, // :root にスタイルを指定するとゲーム画面全体に影響するため削除
    themeRoot: "#app-root", // :root にスタイルを指定するとゲーム画面全体に影響するため削除
  },
}

