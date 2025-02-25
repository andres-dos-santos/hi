import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: "var(--font-barlow)",
				serif: "var(--font-code)",
				"demi-bold": "var(--font-tt-demi-bold)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
