import Link from 'next/link'

import { Title } from '@/components/title'
import { Find } from '@/components/find'
import { ArrowUpRight, Github, PhoneCall } from 'lucide-react'
import { Map } from '@/components/map'

export const revalidate =
  process.env.NODE_ENV === 'development' ? 30 : 60 * 60 * 1 // 1 hour

interface Post {
  title: string
  id: string
  createdAt: string
}

const queryWithoutSearches = `
  query {
    posts(orderBy: createdAt_DESC) {
      title
      id
      createdAt
    }
  }
`

const queryWithSearches = `
  query GetLearnPosts($searched: String) {
    posts(where: { title_contains: $searched }, orderBy: createdAt_DESC) {
      title
      id
      createdAt
    }
  }
`

async function getPosts(searched?: string): Promise<Post[]> {
  const payload = searched
    ? { query: queryWithSearches, variables: { searched } }
    : { query: queryWithoutSearches }

  const response = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/clcckqn423yp601uo3xcd1rh7/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  )

  const json = await response.json()

  return json.data ? json.data.posts : []
}

export default async function Learns(props: {
  searchParams?: { find: string }
}) {
  const posts = await getPosts(props.searchParams?.find)

  const active = 'Todos'

  return (
    <div className="py-10">
      {/* <div className="relative">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                className="flex items-start gap-x-5 sm:gap-x-10 group mb-5"
                href={`/post/${post.id}`}
              >
                <span className="text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div> */}

      <span className="text-sm block mb-10 leading-7 mx-10">
        I am a developer passionate about technology, always looking for new
        challenges and learning. With experience in several programming
        languages ​​(such as JavaScript and Kotlin) and frameworks (such as
        React/React Native/Node and Jetpack Compose), I stand out for my ability
        to adapt efficient and creative solutions to solve complex problems. I
        have solid knowledge in Object-Oriented Programming, mobile application
        development, and have worked with tools such as Supabase, Firebase,
        Styled Components, AWS, Jetpack Compose, NextJS and Expo.
      </span>

      <span className="text-sm block mb-10 leading-7 mx-10">
        I'm currently exploring areas such as AI applied to medicine, as well as
        expanding my skills in iOS development.
      </span>

      <span className="text-sm block mb-10 leading-7 mx-10">
        My approach to development is centered on clean code, modularity, and
        good design practices. I enjoy collaborating in multidisciplinary teams,
        where I can share knowledge and learn from other professionals. I am
        interested in opportunities that allow me to continue to evolve as a
        developer, while contributing to innovative and impactful projects.
      </span>

      <span className="text-sm block mb-10 leading-7 mx-10">
        Whether developing a project from scratch or optimizing existing
        systems, I am always ready to take on the next challenge and create
        solutions that make a difference.
      </span>

      {/* <span className="text-[13px] block mb-10 mx-10">mapa de onde eu moro</span> */}

      <Map />

      <span className="text-[13px] block mb-10 mx-10">
        Indicador do tempo com os projetos
      </span>

      <footer className="flex items-center gap-5">
        <button className="flex items-center justify-center">
          <span className="text-[13px] font-medium -tracking-wide text-blue-500 border-b border-blue-500">
            Download my resume
          </span>
          <ArrowUpRight size={14} className="text-blue-500" />
        </button>

        <button className="flex items-center justify-center">
          <span className="text-[13px] font-medium -tracking-wide text-blue-500 border-b border-blue-500">
            See my Github
          </span>
          <ArrowUpRight size={14} className="text-blue-500" />
        </button>

        <button className="flex items-center justify-center">
          <span className="text-[13px] font-medium -tracking-wide text-blue-500 border-b border-blue-500">
            Come to my LinkedIn
          </span>
          <ArrowUpRight size={14} className="text-blue-500" />
        </button>
      </footer>
    </div>
  )
}
