/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('daisyui')],
	corePlugins: {

		transitionProperty: false,
	},
	daisyui: {
		themes: [{
			light: {
				...require("daisyui/src/theming/themes")["light"],
				primary: "88b20e",
			},
			dark: {
				...require("daisyui/src/theming/themes")["dark"],
				primary: "88b20e",
			},
		}], 
		// themes 設定はDev用 (lb-Phoneではoklch で指定できないため)
		// app.cssのフォールバックテーマで変更すること
	}
};