import Link from 'next/link'

import { Title } from '@/components/title'
import { ChevronRight } from 'lucide-react'

export const revalidate =
  process.env.NODE_ENV === 'development' ? 30 : 60 * 60 * 1 // 1 hour

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
  const [worthReading, ...posts] = await getPosts()

  return (
    <>
      <Title>Learn</Title>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              className="flex items-start space-x-5 sm:space-x-10 group mb-5"
              href={`/post/${post.id}`}
            >
              <span className="-tracking-wider text-xs sm:text-sm font-medium dark:text-zinc-400 text-zinc-500 flex items-center justify-center">
                {post.createdAt.slice(0, 4)}{' '}
                <span className="h-1 w-1 bg-zinc-500 dark:bg-zinc-400 rounded-full mx-1.5 sm:mx-2.5" />
                {post.createdAt.slice(5, 7)}
              </span>

              <span className="text-xs sm:text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline">
                {post.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={`/post/${worthReading.id}`}
        className="invisible sm:visible min-w-[450px] dark:text-white text-zinc-800 p-5 border border-zinc-200 fixed bottom-5 right-5 rounded-md dark:border-zinc-700/50 transition-all duration-300"
      >
        <header className="flex items-center justify-between mb-5">
          <div className="flex flex-col">
            <span className="-tracking-[0.00622em] text-sm font-semibold dark:text-white text-zinc-800">
              Vale a pena ler
            </span>

            <span className="text-xs font-medium dark:text-zinc-400 text-zinc-500 mt-1.5">
              Essa leitura vai valer a pena.
            </span>
          </div>
        </header>

        <span className="text-xs sm:text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline">
          {worthReading.title}
        </span>

        <button className="hover:bg-zinc-200/75 hover:dark:bg-zinc-700/75 bg-zinc-100/75 dark:bg-zinc-800/75 w-full h-12 mt-5 rounded-md flex items-center justify-center group">
          <span className="text-[13px] text-zinc-700 font-medium dark:text-white">
            Ler história
          </span>

          <ChevronRight
            size={14}
            className="transition-all duration-300 translate-x-0 group-hover:translate-x-5 opacity-0 group-hover:opacity-100"
          />
        </button>
      </Link>
    </>
  )
}
