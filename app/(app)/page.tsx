import dayjs from 'dayjs'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from '@/components/ui/sheet'

function Name() {
	return (
		<h1 className="text-7xl font-extralight -tracking-wider leading-[0.8]">
			Andres <span className="text-zinc-400">dos Santos</span>
		</h1>
	)
}

function Skills() {
	return (
		<span className="dark:text-zinc-400 text-zinc-700 text-sm">
			Frontend <br /> <span className="block ml-10">with React </span>
			<span className="block ml-4">& React Native.</span>
		</span>
	)
}

interface Data {
	id: string
	slug: string
	title: string
	html: {
		html: string
	}
	createdAt: string
}

const query = `
query GetStudy {
  posts {
    id
    slug
		title
    html {
      html
    }
    createdAt
 } 
}`

async function getArticles(): Promise<{ data: { posts: Data[] } }> {
	const response = await fetch(
		'https://us-west-2.cdn.hygraph.com/content/cm7n4xwav033s07uu05lcbud9/master',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query }),
		},
	)

	const json = await response.json()

	return json
}

export default async function Home() {
	const { data } = await getArticles()
	const [highlight, ...articles] = data.posts

	const hasMoreThanOneArticle = articles.length > 0

	return (
		<div className="p-10">
			<Name />

			<div className="flex items-center justify-between mt-10 w-full pb-10">
				<Skills />
			</div>

			<div className="w-full grid grid-cols-10 mt-10">
				<div className="col-span-3 flex items-center h-8 pt-1">
					<h2 className="font-light italic">Posts</h2>

					<div className="h-px w-full bg-zinc-200 dark:bg-zinc-700 mx-5"></div>
				</div>

				<ul className="w-full col-span-7">
					<li key={highlight.id} className="cursor-pointer group">
						<Link href={`/post/${highlight.slug}`}>
							<strong className="text-2xl font-normal font-serif group-hover:underline">
								{highlight.title}
							</strong>

							<div
								className="text-[13px] font-normal text-zinc-600 dark:text-neutral-300 line-clamp-2 mt-5"
								// biome-ignore lint/security/noDangerouslySetInnerHtml: <>
								dangerouslySetInnerHTML={{ __html: highlight.html.html }}
							/>

							<section className="mt-2.5">
								<span className="text-[10px] text-neutral-500 dark:text-neutral-300 uppercase font-code -tracking-wider">
									{dayjs(highlight.createdAt).format('DD MMM[,] YY')} • 11 min.
								</span>
							</section>
						</Link>
					</li>

					<li>
						<Sheet>
							<SheetTrigger asChild>
								<button
									type="button"
									className="group flex items-center mt-5 gap-2.5 data-[visible=false]:hidden"
									data-visible={hasMoreThanOneArticle}
								>
									<ChevronDown className="size-3.5 -rotate-90 group-hover:rotate-0 transition-all duration-300" />
									<span className="text-xs group-hover:underline">
										Load more
									</span>
								</button>
							</SheetTrigger>
							<SheetContent>
								<SheetHeader>
									<h2 className="text-2xl font-light">
										More <span className="text-zinc-400">articles</span>
									</h2>
								</SheetHeader>

								<ul className="px-10">
									{articles.map((item) => (
										<li
											key={item.id}
											className="cursor-pointer group first:mt-10 mb-8"
										>
											<Link href={`/post/${item.slug}`}>
												<strong className="text-2xl font-normal font-serif group-hover:underline">
													{item.title}
												</strong>

												<div
													className="text-[13px] font-normal text-zinc-600 dark:text-neutral-300 line-clamp-2 mt-5"
													// biome-ignore lint/security/noDangerouslySetInnerHtml: <>
													dangerouslySetInnerHTML={{ __html: item.html.html }}
												/>

												<section className="mt-2.5">
													<span className="text-[10px] text-neutral-500 dark:text-neutral-300 uppercase font-code -tracking-wider">
														{dayjs(item.createdAt).format('DD MMM[,] YY')} • 11
														min.
													</span>
												</section>
											</Link>
										</li>
									))}
								</ul>
							</SheetContent>
						</Sheet>
					</li>
				</ul>
			</div>

			{/* <div className="w-full grid grid-cols-10">
				<div className="col-span-3 pt-5">
					<h2 className="font-light italic">Projetcs</h2>
				</div>

				<div className="col-span-7">
					<ul className="w-full">
						{articles.map((item) => (
							<li key={item.id} className="first:pt-0 pt-5 pb-5">
								<Link href={`/post/${item.slug}`}>
									<div className="p-4 rounded-xl hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50">
										<strong className="text-2xl font-normal font-serif">
											{item.title}
										</strong>

										<div
											className="text-[13px] font-normal text-zinc-600 dark:text-neutral-300 line-clamp-2 mt-5"
											// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
											dangerouslySetInnerHTML={{ __html: item.html.html }}
										/>

										<section className="mt-2.5">
											<span className="text-[10px] text-neutral-500 dark:text-neutral-300 uppercase font-code -tracking-wider">
												{dayjs(item.createdAt).format('DD MMM[,] YY')} • 11 min.
											</span>
										</section>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div> */}
		</div>
	)
}
