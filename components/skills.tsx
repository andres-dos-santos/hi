import clsx from 'clsx'

import { Title } from './title'

const skills = [
	{ title: 'React', level: 5 },
	{ title: 'React Native', level: 5 },
	{ title: 'Node.js', level: 3 },
]

export function Skills() {
	return (
		<>
			<Title>Skills</Title>

			<ul className="mt-2.5">
				{skills.map((skill) => (
					<li key={skill.title}>
						<div className="flex items-center justify-between mt-5">
							<span className="w-[30%] text-[13px] leading-[26px] text-zinc-500/90">
								{skill.title}
							</span>

							<div className="flex items-center gap-1">
								{Array.from({ length: skill.level }, (_, i) => (
									<div
										className={clsx('rounded-full h-[2px] w-2.5', {
											'bg-green-500': skill.level > 3,
											'bg-yellow-500': skill.level === 3,
											'bg-red-500': skill.level < 3,
										})}
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={i}
									/>
								))}
							</div>

							{/* <div className="flex items-center justify-end text-end ml-auto w-[70%] text-[13px] leading-[26px] text-zinc-900 hover:underline">
								{item.title}
							</div> */}
						</div>
					</li>
				))}
			</ul>
		</>
	)
}
