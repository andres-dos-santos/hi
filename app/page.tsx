import Link from 'next/link'

import { Title } from '@/components/title'
import { Find } from '@/components/find'
import { ArrowUpRight, Github, PhoneCall } from 'lucide-react'

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

      <span className="text-[13px] block mb-10">
        Olá, me chamo Andres sou desenvolvedor a mais de 4 anos, nesse período
        desenvolvi 3 aplicativos e 1 site e dou manutenção constante neles.
      </span>

      <span className="text-[13px] block mb-10">
        Tenho estudado muito o inglês e aprofundado meus conhecimentos para a
        programação na medicina, principalmente na área de IA.
      </span>

      <span className="text-[13px] block mb-10">
        Sou aluno de Ciências da Computação na faculdade Estácio de Sá e tenho
        um profundo apreço por estudar e melhorar a cada dia.
      </span>

      <span className="text-[13px] block mb-10">mapa de onde eu moro</span>

      <span className="text-[13px] block mb-10">
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
