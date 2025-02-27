import dayjs from 'dayjs'
import { ArrowLeft, ChevronLast, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

async function getPost(slug: string) {
	const query = `
		query ($slug: String!) {
			posts (where: { slug: $slug }) {
				id
				title
				slug
				html { html }
				createdAt
			}
		}
	`

	const response = await fetch(process.env.NEXT_PUBLIC_HYGRAPH_URL ?? '', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables: { slug } }),
		next: { revalidate: 3600 },
	})

	const data = await response.json()

	return data
}

export default async function Page({
	params,
}: { params: Promise<{ slug: string }> }) {
	const { slug } = await params

	const data = await getPost(slug)

	const post = data.data.posts[0]

	return (
		<>
			<header className="my-20">
				<Link href="/" className="flex items-center">
					<ChevronLeft className="size-3.5 mr-2.5" />
					<span className="text-[13px]">
						{dayjs(post.createdAt).format('MMM DD')}
					</span>

					<span className="text-[13px] mx-5 text-zinc-500">/</span>

					<span className="text-[13px]">Andres</span>
				</Link>
			</header>

			<div
				className="pb-20 prose prose-h1:mb-12 prose-p:leading-6 prose-strong:block prose-strong:my-10 prose-h1:text-xl prose-h1:font-medium prose-p:text-sm prose-h1:-tracking-wider"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: post.html.html }}
			/>
		</>
	)
}
