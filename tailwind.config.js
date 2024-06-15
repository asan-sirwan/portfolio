/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark": "#12181B",
				"dark-variant": "#202737",
			},
		},
	},
	plugins: [],
};
