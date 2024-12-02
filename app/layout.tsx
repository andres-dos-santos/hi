/* eslint-disable camelcase */
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'

import './globals.css'

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
    <html
      lang="en"
      className={`${inter.variable} ${plexMono.variable} relative`}
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#9090900a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px]"></div>
      {/* <div className="absolute left-0 right-0 bottom-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div> */}
      <body className="antialiased bg-[#fefefe] dark:bg-[#1c1c1c] px-10 sm:px-0">
        <main className="mx-auto max-w-[800px]">{children}</main>
      </body>
    </html>
  )
}
