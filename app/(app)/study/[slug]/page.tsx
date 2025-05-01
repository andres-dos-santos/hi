import { Dots } from '@/components/dots'
import dayjs from 'dayjs'
import { ArrowLeft } from 'lucide-react'
import { Cormorant } from 'next/font/google'
import Link from 'next/link'

const cormorant = Cormorant({
	subsets: ['latin'],
	variable: '--font-cormorant',
	weight: ['300', '400', '500', '600', '700'],
})

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

async function getStudy(slug: string) {
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

	console.log(post.createdAt)

	return (
		<>
			<Link href="/" className="mb-20 flex items-center gap-5">
				<ArrowLeft className="size-3" />
				<span className="text-xs">
					{dayjs(post.createdAt).format('DD/MM/YY')}
				</span>
			</Link>

			<h1
				className={`${cormorant.variable} font-cormorant text-zinc-800/90 font-medium text-4xl -tracking-wide`}
				// key={item}
			>
				{post.title}
			</h1>

			<Dots />

			<div
				className="mt-10 prose"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
				dangerouslySetInnerHTML={{ __html: post.html.html }}
			/>
		</>
	)
}
