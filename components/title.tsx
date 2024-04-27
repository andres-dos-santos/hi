import { ComponentProps } from 'react'
import { clsx } from 'clsx'

export function Title(props: ComponentProps<'h1'>) {
  return (
    <h1
      {...props}
      className={clsx(
        'text-3xl font-medium dark:text-white text-zinc-700 -tracking-wider mb-20',
        props.className,
      )}
    >
      {props.children}
    </h1>
  )
}
