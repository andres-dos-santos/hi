'use client'

import { ArrowUpRight } from 'lucide-react'
import React, { ComponentProps } from 'react'

export function HomeLink(props: ComponentProps<'button'>) {
  return (
    <button className="flex items-center" {...props}>
      <span className="border-b border-dashed text-xs font-semibold">
        {props.children}
      </span>
      <ArrowUpRight size={14} />
    </button>
  )
}
