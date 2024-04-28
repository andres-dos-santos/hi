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
                    width="24"
                    height="24"
                    viewBox="0 0 256 256"
                    className="fill-zinc-800 dark:fill-white"
                  >
                    <path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path>
                  </svg>

                  <span className="hidden sm:flex sm:after:content-['@andresdossantos'] text-sm font-medium dark:text-zinc-400 text-zinc-700" />

                  <span className="text-sm font-medium dark:text-zinc-400 text-zinc-700">
                    :
                  </span>

                  <Link href="/">Learn</Link>

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
