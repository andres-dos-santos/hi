import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'

import { Title } from './title'

const projects = [
	{
		logo: require('/public/result-logo.png'),
		name: 'Resultado',
		position: 'Mobile',
		color: '#FE7E1D',
		href: 'https://play.google.com/store/apps/details?id=com.zaal.result',
	},
	{
		logo: require('/public/noter.png'),
		name: 'Noter',
		position: 'Mobile',
		color: '#FE7E1D',
		href: null,
	},
]

export function Work() {
	return (
		<>
			<Title>What I worked on</Title>

			<ul className="mt-5 grid grid-cols-4 gap-[6px] max-h-[250px]">
				{projects.map((project) => (
					<li
						key={project.name}
						className={clsx(
							'rounded-2xl flex h-[80px] w-[80px] hover:bg-zinc-50 flex-col group items-center justify-center border border-zinc-100 hover:border-zinc-200/30 relative cursor-pointer hover:scale-110 transition-all duration-500',
						)}
					>
						<Link
							href={project.href ?? ''}
							data-href={!!project.href}
							className="data-[href=false]:cursor-not-allowed data-[href=false]:pointer-events-none h-full w-full flex items-center justify-center group relative"
							target="_blank"
						>
							<div className="absolute flex-col -top-8 bg-zinc-700 flex p-5 items-center line-clamp-2 text-center justify-center shadow-lg rounded-xl group-hover:scale-105 scale-0 transition-all duration-500 h-14 min-w-[90%]">
								<span className="font-medium text-[13px] text-white">
									{project.name}
								</span>
								<span className="font-medium text-[9px] uppercase text-zinc-400">
									{project.position}
								</span>
							</div>

							<div className="h-[42px] w-[42px] rounded-[12px] border group-hover:border-none border-zinc-100 flex items-center justify-center">
								<Image
									src={project.logo}
									height={56}
									width={56}
									quality={100}
									className="w-[32px] h-[32px] rounded-[9px]"
									alt=""
								/>
							</div>

							<div className="absolute bottom-1">
								<ArrowUpRight className="size-2.5 text-zinc-400 transition-all duration-300 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" />
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
