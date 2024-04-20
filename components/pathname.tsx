'use client'

import { usePathname } from 'next/navigation'
import NextLink from 'next/link'
import { ComponentProps } from 'react'

type Href = '/works' | '/' | '/books'

export function Link(props: ComponentProps<'p'> & { href: Href }) {
  const pathname = usePathname()

  return (
    <NextLink href={props.href}>
      <span
        data-page={props.href === pathname}
        className="data-[page='true']:text-zinc-900 data-[page='false']:text-zinc-700 data-[page='false']:hover:text-zinc-900 dark:data-[page='true']:text-white text-sm font-medium dark:data-[page='false']:text-zinc-400 dark:data-[page='false']:hover:text-white"
      >
        {props.children}
      </span>
    </NextLink>
  )
}
