import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100ch', // add required value here
					},
				},
			},
			fontFamily: {
				sans: 'var(--font-barlow)',
				code: 'var(--font-code)',
				'demi-bold': 'var(--font-tt-demi-bold)',
				cormorant: 'var(--font-cormorant)',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
export default config
