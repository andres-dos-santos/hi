'use client'

import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'

export function Find() {
  const router = useRouter()

  const ref = useRef<HTMLInputElement>(null)

  function onSubmit(e: FormEvent) {
    e.preventDefault()

    router.push(`?find=${ref.current?.value}`)
  }

  return (
    <form
      action=""
      onSubmit={onSubmit}
      className="transition-all duration-300 flex items-center px-2 h-8 rounded-md border border-zinc-200/50 dark:border-zinc-700/50 focus-within:border-zinc-300 focus-within:dark:border-zinc-700 focus-within:ring-4 focus-within:ring-zinc-200/50 dark:focus-within:ring-zinc-700/50"
    >
      <Search size={14} />
      <input
        ref={ref}
        type="text"
        className="text-xs outline-none bg-zinc-200/10 dark:bg-zinc-800/10 pl-2.5 placeholder:text-zinc-500"
        placeholder="E aí, o que quer saber?"
      />

      <button type="submit" className="invisible"></button>
    </form>
  )
}
