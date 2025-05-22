import { Dots } from '@/components/dots'
import { DownloadCV } from '@/components/download-cv'
import { Experience } from '@/components/experience'
import { GithubLink } from '@/components/github-link'
import { LinkedinLink } from '@/components/linkedin-link'
import { MapRender } from '@/components/map-render'
import { Name } from '@/components/name'
import { Study } from '@/components/study'
import { Work } from '@/components/work'

// async function getPosts(): Promise<{ data: { posts: Post[] } }> {
// 	const query = `
// 		query {
// 			posts {
// 				id
// 				title
// 				slug
// 				html { html }
// 				createdAt
// 			}
// 		}
// 	`

// 	const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL ?? '', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({ query }),
// 		next: { revalidate: 3600 },
// 	})

// 	const data = await response.json()

// 	return data
// }

export default async function Home() {
	// const { data } = await getPosts()

	return (
		<>
			<Name />

			<div className="h-px w-full my-20 bg-zinc-100" />

			<span className="block text-sm text-zinc-500 ml-auto text-right">
				Full stack developer with <br /> NodeJS
				<br /> React <br />& React Native
			</span>

			<div className="h-px w-full my-20 bg-zinc-100" />

			<span className="block text-sm text-zinc-900/85">Hi 👋.</span>

			<span className="mt-8 block text-sm leading-[28px] text-zinc-900/85">
				I'm a full-stack developer with +4 years of experience in React (NextJS)
				and React Native (Expo).
			</span>

			<span className="mt-8 block text-sm leading-[28px] text-zinc-900/85">
				I like to create scalable and simple solutions through algorithms & data
				structures.
			</span>

			<span className="mt-8 block text-sm leading-[28px] text-zinc-900/85">
				Contact me.
			</span>

			<nav className="mt-14 flex items-center">
				<GithubLink />

				<LinkedinLink />

				<DownloadCV />
			</nav>

			<Dots />

			<Work />

			<Dots />

			<Experience />

			<Dots />

			<Study />

			<Dots />

			<MapRender />

			<Dots />

			<div className="flex items-center justify-between">
				<span className="text-zinc-400 text-sm -tracking-wide">
					© 2025 Andres
				</span>

				<span className="text-zinc-400 text-sm -tracking-wide">
					Made with ❤️
				</span>
			</div>
		</>
	)
}
