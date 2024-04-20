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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path
                      d="M9.01654 6.15879C10.9944 4.77262 17.9171 3.55944 18.906 6.15879C20.3862 10.0497 3.87743 12.3805 5.06077 6.15849C5.55508 3.55944 10.5002 2 12.9725 2"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18 11.1934C15.423 13.0706 8.5771 13.8244 6 11.7816"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.0219 21.6941C13.0436 21.8816 12.0077 21.989 11 21.9995"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 15.166C9.07731 16.0444 12.3835 15.9574 15 15.2812"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M8.03906 18.5039C9.49304 18.8598 11.2867 18.8854 12.9988 18.6635"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

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
