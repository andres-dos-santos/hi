import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

import { fonts } from '@/lib/fonts'

import './globals.css'

const { code, display, serif } = fonts

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
			className={`${display.variable} ${code.variable} ${serif.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider defaultTheme="system">{children}</ThemeProvider>
			</body>
		</html>
	)
}
