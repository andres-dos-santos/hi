import Link from 'next/link'
import dayjs from 'dayjs'

import { Title } from './title'

interface Post {
	id: string
	slug: string
	title: string
	createdAt: string
}

const query = `
query {
  posts {
    id
    slug
		title
    createdAt
 } 
}`

async function getStudies() {
	const response = await fetch(
		'https://us-west-2.cdn.hygraph.com/content/cm7n4xwav033s07uu05lcbud9/master',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			next: {
				revalidate: 60,
			},
			body: JSON.stringify({ query }),
		},
	)

	const json = await response.json()

	return json
}

export async function Study() {
	const { data } = await getStudies()

	const posts = data.posts

	return (
		<>
			<Title>What I studied</Title>

			<ul>
				{posts.map((item: Post) => (
					<li key={item.id}>
						<Link
							href={`/study/${item.slug}`}
							className="flex items-center justify-between mt-5"
						>
							<span className="w-[30%] text-[13px] leading-[26px] text-zinc-500/90">
								{dayjs(item.createdAt).format('MMM DD')}
							</span>
							<div className="flex items-center justify-end text-end ml-auto w-[70%] text-[13px] leading-[26px] text-zinc-900 hover:underline">
								{item.title}
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
