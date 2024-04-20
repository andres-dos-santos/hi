import { ComponentProps } from 'react'

export function Title(props: ComponentProps<'h1'>) {
  return (
    <h1
      className="text-3xl font-medium dark:text-white text-zinc-700 -tracking-wider mb-20"
      {...props}
    >
      {props.children}
    </h1>
  )
}
