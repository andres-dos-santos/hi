import Link from 'next/link'

import { Title } from '@/components/title'

export const revalidate =
  process.env.NODE_ENV === 'development' ? 30 : 60 * 60 * 8 // 8 hours

interface Post {
  title: string
  id: string
  createdAt: string
}

const query = `
  query {
    posts(orderBy: createdAt_DESC) {
      title
      id
      createdAt
    }
  }
`

async function getPosts(): Promise<Post[]> {
  const response = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/clcckqn423yp601uo3xcd1rh7/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    },
  )

  const json = await response.json()

  return json.data.posts
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <>
      <Title>Blog</Title>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="flex items-center space-x-5 sm:space-x-10 group mb-5"
              href={`/post/${post.id}`}
            >
              <span className="text-sm font-medium dark:text-zinc-400 text-zinc-500 flex items-center justify-center">
                {post.createdAt.slice(0, 4)}{' '}
                <span className="h-1 w-1 bg-zinc-500 dark:bg-zinc-400 rounded-full mx-2.5" />
                {post.createdAt.slice(5, 7)}
              </span>

              <span className="text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline truncate">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
