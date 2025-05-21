import type { ComponentProps } from 'react'

import { Barlow } from 'next/font/google'

const barlow = Barlow({
	subsets: ['latin'],
	style: 'italic',
	variable: '--font-title',
	weight: ['500'],
})

export function Title(props: ComponentProps<'span'>) {
	return (
		<div className=" flex">
			<span
				className={`${barlow.className} font-title flex text-[13px] -tracking-wide font-semibold text-zinc-900`}
			>
				{props.children}
			</span>
		</div>
	)
}
