/* eslint-disable camelcase */
import { Cormorant_Infant } from 'next/font/google'

const cormorant = Cormorant_Infant({
	subsets: ['latin'],
	variable: '--font-cormorant',
	weight: ['300', '400', '500', '600', '700'],
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <div className="max-w-[600px] mx-auto">{children}</div>
}
