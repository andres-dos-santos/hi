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
          <div className="sm:max-w-[800px] sm:mx-auto">
            <header className="my-20">
              <nav className="flex justify-between items-center">
                <div className="flex items-center space-x-2.5 sm:space-x-5">
                  <span className="after:content-['@andres'] sm:after:content-['@andresdossantos'] text-sm font-medium dark:text-zinc-400 text-zinc-700" />

                  <span className="text-sm font-medium dark:text-zinc-400 text-zinc-700">
                    :
                  </span>

                  <Link href="/">Blog</Link>

                  <span className="text-sm font-medium dark:text-zinc-400 text-zinc-700">
                    /
                  </span>

                  <Link href="/works">Works</Link>

                  <span className="text-sm font-medium dark:text-zinc-400 text-zinc-700">
                    /
                  </span>

                  <Link href="/books">Books</Link>
                </div>

                <Theme />
              </nav>
            </header>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
