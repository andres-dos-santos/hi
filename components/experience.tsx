import Link from 'next/link'
import { Title } from './title'

const experiences = [
	{
		year: '2021',
		content: 'Software developer PL at',
		link: 'https://zaal.com.br',
		favicon: 'https://zaal.com.br/favicon.ico',
		company: 'Zaal Tecnologia',
	},
	{
		year: '2020 - 2021',
		content: 'Software developer JR at',
		link: 'https://h4money.com.br',
		favicon: 'https://www.h4money.com.br/favicon.ico',
		company: 'H4money',
	},
]

export function Experience() {
	return (
		<>
			<Title>WORK EXPERIENCES</Title>

			<ul>
				{experiences.map((item) => (
					<li
						key={item.link}
						className="flex sm:flex-row flex-col items-start w-full sm:items-center justify-between mt-5"
					>
						<span className="w-[30%] text-[13px] leading-[26px] text-zinc-500/90 mt-3 block sm:mt-0">
							{item.year}
						</span>
						<span className="flex items-center justify-end w-full sm:w-[70%] text-[13px] leading-[26px] text-zinc-900">
							{item.content}{' '}
							<Link
								href={item.link}
								className="flex items-center hover:underline"
							>
								<img
									src={item.favicon}
									alt=""
									width={20}
									height={20}
									className="mx-1"
								/>{' '}
								{item.company}
							</Link>
						</span>
					</li>
				))}
			</ul>
		</>
	)
}
