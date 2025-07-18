import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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
query GetStudy($slug: String!) {
  posts(where: { slug: $slug }) {
    id
    slug
		title
    html {
      html
    }
    createdAt
 } 
}`

async function getStudy(slug: string): Promise<{ data: { posts: Data[] } }> {
	const response = await fetch(
		'https://us-west-2.cdn.hygraph.com/content/cm7n4xwav033s07uu05lcbud9/master',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ query, variables: { slug } }),
		},
	)

	const json = await response.json()

	return json
}

export default async function Page(props: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await props.params

	const { data } = await getStudy(slug)

	const post = data.posts[0]

	return (
		<div className="px-10">
			<Link href="/" className="mb-20 mt-10 flex items-center gap-5">
				<ArrowLeft className="size-3" />
				<span className="text-xs">
					{dayjs(post.createdAt).format('DD/MM/YY')}
				</span>
			</Link>

			<h1 className="font-serif text-zinc-800/90 font-medium text-5xl -tracking-wide">
				{post.title}
			</h1>

			<div
				className="mt-10 prose"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <>
				dangerouslySetInnerHTML={{ __html: post.html.html }}
			/>

			<footer className="mt-10 pt-10 px-2.5 pb-40 border-t border-dashed border-t-zinc-200 flex items-center justify-between">
				<span className="text-[13px] text-muted-foreground">
					Created at {dayjs(post.createdAt).format('YYYY MMM, DD')}
				</span>

				{/* <button type="button" className="flex items-center justify-center">
					<span className="text-sm text-zinc-700">
						Como fazer pão com alho na churrasqueira?
					</span>

					<ChevronRight className="size-3.5" />
				</button> */}
			</footer>
		</div>
	)
}
