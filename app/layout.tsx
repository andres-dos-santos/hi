/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'

import { Providers } from './providers'

// import { Theme } from '@/components/theme'
// import { Logo } from '@/components/logo'

import './globals.css'
import { Theme } from '@/components/theme'
import { Link } from '@/components/pathname'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-code',
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
    <html lang="en" className={`${inter.variable} ${plexMono.variable}`}>
      <body className="antialiased bg-[#fefefe] dark:bg-[#1c1c1c] px-10 sm:px-0">
        <Providers>
          <header className="py-10 bg-zinc-800/50">
            <div className="sm:max-w-[900px] sm:mx-auto flex items-center gap-2.5">
              <div className="h-14 w-14 rounded bg-zinc-700/50 flex items-center justify-center">
                <span className="font-semibold font-mono text-sm -tracking-wide">
                  AS
                </span>
              </div>

              <div className="block">
                <h1 className="font-semibold font-mono text-sm -tracking-wide">
                  andres-dos-santos
                </h1>
                <span className="text-[12px] text-zinc-300 font-medium">
                  4+ years of experience with Next, React Native, Node or
                  Android
                </span>
              </div>

              <nav className="ml-auto gap-5 flex items-center">
                <span className="text-[11px] font-semibold tracking-wide">
                  HOME
                </span>
                <span className="text-[11px] font-semibold tracking-wide">
                  PROJECTS
                </span>
                <span className="text-[11px] font-semibold tracking-wide">
                  ARTICLES
                </span>
              </nav>
            </div>
          </header>
          <div className="sm:max-w-[900px] sm:mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
