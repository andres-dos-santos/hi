import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

import { Title } from './title'

const projects = [
	{
		logo: require('/public/result-logo.png'),
		name: 'Resultado',
		position: 'Mobile developer',
		href: 'https://play.google.com/store/apps/details?id=com.zaal.result',
	},
]

export function Work() {
	return (
		<>
			<Title>WHAT I WORKED ON</Title>

			<ul className="mt-5">
				{projects.map((project) => (
					<li
						key={project.name}
						className="rounded-2xl flex h-[120px] w-[120px] flex-col group items-center justify-center border hover:border-zinc-200/30 hover:bg-zinc-200/30 relative cursor-pointer hover:scale-105 transition-all duration-500"
					>
						<Link
							href={project.href}
							className="h-full w-full flex items-center justify-center group relative"
							target="_blank"
						>
							<div className="absolute flex-col -top-8 bg-zinc-700 flex p-5 items-center line-clamp-2 text-center justify-center shadow-lg rounded-xl group-hover:scale-110 scale-0 transition-all duration-500 h-14 min-w-[75%]">
								<span className="font-medium text-[13px] text-white">
									{project.name}
								</span>
								<span className="font-medium text-[9px] uppercase text-zinc-400">
									{project.position}
								</span>
							</div>

							<div className="h-[80px] w-[80px] rounded-[16px] flex items-center justify-center">
								<Image
									src={project.logo}
									height={80}
									width={80}
									quality={100}
									className="w-[80px] h-[80px] rounded-xl"
									alt=""
								/>
							</div>

							<div className="absolute bottom-2">
								<ArrowUpRight className="size-3 text-zinc-400 transition-all duration-300 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" />
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
