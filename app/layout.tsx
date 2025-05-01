/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Jost, IBM_Plex_Mono, Cormorant } from 'next/font/google'

import localFont from 'next/font/local'

import './globals.css'

const barlow = Jost({
	subsets: ['latin'],
	variable: '--font-barlow',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const cormorant = Cormorant({
	subsets: ['latin'],
	variable: '--font-cormorant',
	weight: ['300', '400', '500', '600', '700'],
})

const plexMono = IBM_Plex_Mono({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-code',
})

const TTDemiBold = localFont({
	src: '../public/fonts/tt-firs-neue/demi-bold.ttf',
	variable: '--font-tt-demi-bold',
})

export const metadata: Metadata = {
	title: 'Andres dos Santos - Portfolio',
	description:
		'Portfolio created by Andreas to show who I am, what I have done and what I study.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html
			lang="en"
			className={`${barlow.variable} ${cormorant.variable} ${TTDemiBold.variable} ${plexMono.variable}`}
		>
			<body className="min-h-screen max-w-[500px] w-[500px] mx-auto py-[200px]">
				{children}
			</body>
		</html>
	)
}
