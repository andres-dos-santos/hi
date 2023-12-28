/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from './providers'

import { Theme } from '@/components/theme'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

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
      <body className="antialiased bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-50">
        <Providers>
          <header className="backdrop-blur-sm fixed top-0 left-0 right-0 border-b border-zinc-200 dark:border-zinc-700">
            <div className="h-14 mx-auto px-10 sm:px-0 sm:max-w-[700px] flex items-center justify-between">
              <span className="text-sm sm:text-sm font-semibold tracking-[0.12em]">
                ANDRES
              </span>

              <Theme />
            </div>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  )
}
