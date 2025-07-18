import { Cormorant, IBM_Plex_Mono, Jost } from 'next/font/google'

const display = Jost({
	subsets: ['latin'],
	variable: '--font-display',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const serif = Cormorant({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['300', '400', '500', '600', '700'],
})

const code = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--font-code',
})

export const fonts = {
	display,
	serif,
	code,
}
