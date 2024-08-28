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
          <header className="h-32 flex items-center bg-zinc-800/50 fixed top-0 left-0 right-0 backdrop-blur-xl">
            <div className="sm:w-[900px] sm:mx-auto flex items-center justify-between gap-2.5">
              <div className="h-14 w-14 rounded bg-zinc-700/50 flex items-center justify-center">
                <span className="font-semibold font-mono text-sm -tracking-wide">
                  AS
                </span>
              </div>

              <div className="block">
                <h1 className="text-xs font-extrabold -tracking-wide">
                  <span className="text-lg font-semibold">A</span>NDRES{' '}
                  <span className="text-lg font-semibold">D</span>OS{' '}
                  <span className="text-lg font-semibold">S</span>ANTOS
                </h1>
              </div>

              <nav className="ml-auto flex items-center">
                <span className="text-[11px] font-semibold tracking-wide">
                  HOME
                </span>

                <span className="text-[11px] font-semibold tracking-wide mx-5">
                  PROJECTS
                </span>

                <span className="text-[11px] font-semibold tracking-wide">
                  ARTICLES
                </span>
              </nav>
            </div>
          </header>
          <div className="sm:max-w-[900px] sm:mx-auto">{children}</div>

          <footer className="h-14 border-t border-zinc-200 dark:border-zinc-800 absolute right-0 left-0 w-full flex items-center justify-between">
            <div className="sm:w-[900px] sm:mx-auto flex items-center justify-between gap-2.5">
              <button>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white">
                  Made with <span className="underline">NextJS</span>
                </span>
              </button>

              <button>
                <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white">
                  Share feedback
                </span>
              </button>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  )
}
