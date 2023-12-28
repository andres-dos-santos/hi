/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter, Major_Mono_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mm_display = Major_Mono_Display({
  weight: ['400'],
  subsets: ['latin'],
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-zinc-900 text-zinc-50">
        <header className="backdrop-blur-sm fixed top-0 left-0 right-0 border-b border-zinc-700">
          <div className="h-14 mx-auto px-10 sm:px-0 sm:max-w-[700px] flex items-center justify-between">
            <strong className={`${mm_display.className} text-xl sm:text-2xl`}>
              ANDRES
            </strong>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
