import Link from 'next/link'
import { ThemeChanger } from '@/components/change-theme'

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex flex-col mx-auto max-w-3xl items-start w-screen h-screen">
			<header className="h-16 px-10 w-full flex items-center gap-5">
				<h1 className="flex items-center text-sm">
					andresdosantos{' '}
					<div className="h-1 w-1 mx-1 rounded-full bg-zinc-400 dark:bg-zinc-300" />{' '}
					com
				</h1>

				<ThemeChanger />

				<div className="ml-auto gap-5 flex items-center">
					<a target="__blank" href="https://www.github.com/andres-dos-santos">
						<span className="text-sm text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:underline">
							github
						</span>
					</a>

					<span className="text-sm">/</span>

					<Link
						rel="noopener noreferrer"
						target="__blank"
						href="https://www.linkedin.com/in/andres-dosantos"
					>
						<span className="text-sm text-neutral-400 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:underline">
							linkedin
						</span>
					</Link>
				</div>
			</header>

			<div className="w-full h-[calc(100vh_-_4rem)]">{children}</div>
		</div>
	)
}
