import { Name } from '@/components/name'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
	{
		logo: require('../../public/21-logo.png'),
		name: '21',
		position: 'Full stack developer',
		href: 'https://21-thoughts.vercel.app/home',

	},
	{
		logo: require('../../public/linkei-logo.png'),
		name: 'Linkei',
		position: 'Web developer',
		href: 'https://lkei.vercel.app',
	},
	{
		logo: require('../../public/benefits-club-logo.png'),
		name: 'Vantagens',
		position: 'Mobile developer',
		href: 'https://play.google.com/store/apps/details?id=com.zaal.clubedevantagens',
	},
	{
		logo: require('../../public/kiosk-logo.png'),
		name: 'Quiosque',
		position: 'Mobile developer',
		href: 'https://play.google.com/store/apps/details?id=com.zaal.quiosqueapp',
	},
	{
		logo: require('../../public/result-logo.png'),
		name: 'Resultado',
		position: 'Mobile developer',
		href: 'https://play.google.com/store/apps/details?id=com.zaal.result',
	},
]

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

type Post = {
	id: string
	slug: string
	title: string
	html: {
		html: string
	}
	createdAt: string
}

export default async function Home() {
	// const { data } = await getPosts()

	return (
		<div className="flex items-center justify-center">
			{/* <div className="fixed top-0 right-0 left-0 p-6 backdrop-blur-md bg-[#F5F5F5]/50" /> */}
			<div className="fixed inset-x-0 top-0 isolate z-[10] h-50">
				<div
					// style="-webkit-backdrop-filter:blur(1px);backdrop-filter:blur(1px)"
					className="absolute inset-0 gradient-mask-b-0 blur-[1px] backdrop-blur-xl"
				/>
				<div
					// style="-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)"
					className="absolute inset-0 gradient-mask-b-0 blur-[2px] backdrop-blur-xl"
				/>
				<div
					// style="-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)"
					className="absolute inset-0 gradient-mask-b-0 blur-[3px] backdrop-blur-xl"
				/>
				<div
					// style="-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)"
					className="absolute inset-0 gradient-mask-b-0 blur-[6px] backdrop-blur-xl"
				/>
				<div
					// style="-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)"
					className="absolute inset-0 gradient-mask-b-0 blur-[12px] backdrop-blur-xl"
				/>
			</div>

			<div className="flex flex-col max-w-[500px] mx-auto py-[200px]">
				
				<Name />

				<div className='h-px w-10 my-10 bg-zinc-200'></div>

				<span className="italic block text-[13px] text-zinc-900/85">
					Full stack developer with NodeJS, React & React Native.
				</span>

				<div className='h-px w-10 my-10 bg-zinc-200'></div>

				<span className="block text-[13px] text-zinc-900/90">
					Olá 👋.
				</span>

				<span className="mt-5 block text-[13px] leading-[26px] text-zinc-900/90">
					Sou desenvolvedor full-stack com +4 de anos de experiência em React
					(NextJS) e React Native (Expo).
				</span>

				<span className="mt-5 block text-[13px] leading-[26px] text-zinc-900/90">
					Gosto de criar soluções escaláveis e simples através de algoritmos &
					estruturas de dados.
				</span>

				<span className="mt-5 block text-[13px] leading-[26px] text-zinc-900/90">
					Entre em contato comigo.
				</span>

				{/* <ul className="mt-14 flex items-center gap-5">
					<li className="cursor-pointer hover:underline text-sm h-14 flex items-center">
						Projetos
					</li>

					<li className="text-sm h-14 flex items-center justify-center">/</li>

					<li className="cursor-pointer hover:underline text-sm h-14 flex items-center">
						Posts
					</li>
				</ul> */}

				<nav className="mt-14 flex items-center gap-5">
					<Link target="__blank" href="https://x.com/andresdo_santos">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="18"
							height="18"
							color="#000000"
							fill="none"
						>
							<title>X logo</title>
							<path
								d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>

					<Link target="__blank" href="https://github.com/andres-dos-santos">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="18"
							height="18"
							color="#000000"
							fill="none"
						>
							<title>Github logo</title>
							<path
								d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>

					<Link
						target="__blank"
						href="https://www.linkedin.com/in/andres-dosantos/"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="18"
							height="18"
							color="#000000"
							fill="none"
						>
							<title>Linkedin logo</title>
							<path
								d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
								stroke="currentColor"
								strokeWidth="1.5"
							/>
							<path
								d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinejoin="round"
							/>
						</svg>
					</Link>
				</nav>

				<span className="my-20 block text-[13px] text-zinc-700/85">. . .</span>

				<span className="block text-[11px] leading-[26px] font-medium text-zinc-900">
					NO QUE EU TRABALHEI
				</span>

				<ul className="grid grid-cols-3 sm:grid-cols-4 gap-5 h-[240px] mt-5">
					{projects.map((project) => (
						<li
							key={project.name}
							className="rounded-2xl flex h-[100px] sm:h-auto w-[100px] sm:w-auto flex-col group items-center justify-center border hover:border-zinc-200/30 hover:bg-zinc-200/30 relative cursor-pointer hover:scale-105 transition-all duration-500"
						>
							<Link
								href={project.href}
								className="h-full w-full flex items-center justify-center group relative"
								target='_blank'
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

				<span className="my-20 block text-[13px] text-zinc-700/85">. . .</span>

				<span className="block text-[11px] leading-[26px] font-medium text-zinc-900">
					EXPERIÊNCIAS DE TRABALHOS
				</span>

				<ul>
					<li className="flex sm:flex-row flex-col items-start w-full sm:items-center justify-between mt-5">
						<span className="w-[30%] text-[13px] leading-[26px] text-zinc-500/90 mt-3 block sm:mt-0">
							2021
						</span>
						<span className="flex items-center w-full sm:w-[60%] text-[13px] leading-[26px] text-zinc-900">
							Software developer PL at{' '}
							<Link
								href="https://zaal.com.br"
								className="flex items-center hover:underline"
							>
								<img
									src="https://zaal.com.br/favicon.ico"
									alt=""
									width={20}
									height={20}
									className="mx-1"
								/>{' '}
								Zaal Tecnologia
							</Link>
						</span>
					</li>

					<li className="flex sm:flex-row flex-col items-start w-full sm:items-center justify-between mt-5">
						<span className="w-[30%] text-[13px] leading-[26px] text-zinc-500/90 mt-3 block sm:mt-0">
							2020 - 2021
						</span>
						<span className="flex items-center w-full sm:w-[60%] text-[13px] leading-[26px] text-zinc-900">
							Software developer JR at{' '}
							<Link
								href="https://zaal.com.br"
								className="flex items-center hover:underline"
							>
								<img
									src="https://www.h4money.com.br/favicon.ico"
									alt=""
									width={20}
									height={20}
								/>{' '}
								H4money
							</Link>
						</span>
					</li>
				</ul>

				<span className="my-20 block text-[13px] text-zinc-700/85">. . .</span>

				{/* <span className="block text-[11px] leading-[26px] font-medium text-zinc-900">
					ESTUDOS
				</span>

				<ul>
					{data.posts.map((item) => (
						<li key={item.id}>
							<Link
								href={`/post/${item.slug}`}
								className="flex items-center justify-between mt-5"
							>
								<span className="w-[30%] text-[13px] leading-[26px] text-zinc-500/90">
									{dayjs(item.createdAt).format('MMM DD')}
								</span>
								<span className="flex items-center w-[60%] text-[13px] leading-[26px] text-zinc-900 hover:underline">
									<ArrowUpRight className="size-3" /> {item.title}
								</span>
							</Link>
						</li>
					))}
				</ul> */}

				{/* <span className="my-20 block text-[13px] text-zinc-700/85">. . .</span> */}

				<div className="flex items-center justify-between">
					<span className="text-zinc-400 text-sm -tracking-wide">
						© 2025 Andres
					</span>

					<span className="text-zinc-400 text-sm -tracking-wide">
						Made with ❤️
					</span>
				</div>
			</div>

			{/* <div className="grid grid-cols-10 p-20 max-w-[1520px] mx-auto h-screen">
				<div className="col-span-6 pl-20 flex items-center justify-center">
					<ul className="grid grid-cols-10 grid-rows-9 gap-5 border">
						<li className="bg-zinc-100 rounded-lg flex items-center justify-center col-span-6 row-span-9">
							<Image
								src={require('../../img.png')}
								alt=""
								className="object-cover w-full h-full rounded-lg"
							/>
						</li>

						{numeros.map((numero, index) => (
							<li
								className="bg-zinc-100 rounded-lg flex items-center justify-center col-span-4 row-span-3"
								key={numero}
							>
								{numero}
							</li>
						))}
					</ul>
				</div>
			</div> */}
		</div>
	)
}
