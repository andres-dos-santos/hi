import Link from 'next/link'

import { Title } from '@/components/title'

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

  const active = 'Todos'

  return (
    <>
      <Title>Learn</Title>

      <div className="relative mt-10 border-t border-zinc-200 dark:border-zinc-700/50 pt-10">
        <div className="absolute h-20 bg-gradient-to-b w-full top-0 right-0 left-0"></div>

        <ul>
          <strong className="text-xs font-semibold block mb-7">
            VALE A PENA LER
          </strong>

          <li>
            <Link
              className="flex items-start gap-x-5 sm:gap-x-10 group mb-5"
              href={`/post/${worthReading.id}`}
            >
              <span className="hidden sm:flex -tracking-wider text-xs sm:text-sm font-medium dark:text-zinc-400 text-zinc-500 items-center justify-center">
                {worthReading.createdAt.slice(0, 4)}{' '}
                <span className="h-1 w-1 bg-zinc-500 dark:bg-zinc-400 rounded-full mx-1.5 sm:mx-2.5" />
                {worthReading.createdAt.slice(5, 7)}
              </span>

              <span className="text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline">
                {worthReading.title}
              </span>
            </Link>
          </li>

          <strong className="text-xs font-semibold block my-7">TODOS</strong>

          {posts.map((post) => (
            <li key={post.id}>
              <Link
                className="flex items-start gap-x-5 sm:gap-x-10 group mb-5"
                href={`/post/${post.id}`}
              >
                <span className="hidden sm:flex -tracking-wider text-xs sm:text-sm font-medium dark:text-zinc-400 text-zinc-500 items-center justify-center">
                  {post.createdAt.slice(0, 4)}{' '}
                  <span className="h-1 w-1 bg-zinc-500 dark:bg-zinc-400 rounded-full mx-1.5 sm:mx-2.5" />
                  {post.createdAt.slice(5, 7)}
                </span>

                <span className="text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="absolute -left-60 -top-[1px] w-56">
          {/** <section className="border-t border-zinc-200 dark:border-zinc-700/50 pt-10 mb-10">
            <strong className="text-xs font-semibold block mb-7">
              VALE A PENA LER
            </strong>

            <button className="text-start w-full text-xs text-zinc-600 font-medium dark:text-zinc-400 group-hover:underline dark:hover:text-white hover:text-zinc-900">
              <span>{worthReading.title}</span>
            </button>
          </section> */}

          <section className="border-t border-zinc-200 dark:border-zinc-700/50 pt-10">
            <strong className="text-xs font-semibold block mb-7">TAGS</strong>

            <ul className="flex flex-col gap-y-3">
              {['Todos', 'React 19', 'Android', 'Docker'].map((item) => (
                <button
                  key={item}
                  data-active={active === item}
                  className="data-[active='true']:text-zinc-900 dark:data-[active='true']:text-white flex items-center justify-between w-full text-xs text-zinc-600 font-medium dark:text-zinc-400 group-hover:underline dark:hover:text-white hover:text-zinc-900"
                >
                  <span>{item}</span>
                </button>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
