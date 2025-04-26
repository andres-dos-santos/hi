import { Dots } from '@/components/dots'
import { Cormorant } from 'next/font/google'

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

	return (
		<>
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
