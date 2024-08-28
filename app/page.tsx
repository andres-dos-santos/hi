import { HomeFooter } from '@/components/home-footer'
import { Map } from '@/components/map'
import { SayHi } from '@/components/say-hi'
import Image from 'next/image'

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

  return (
    <div className="px-10 pb-20">
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

      <div className="flex items-baseline mb-8 mt-[13rem] gap-5">
        <h6 className="first-letter:text-lg first-letter:font-semibold text-xs font-extrabold -tracking-wide">
          ABOUT ME
        </h6>
        <span className="text-[12px] font-semibold text-zinc-400 uppercase">
          4+ years of experience with Next, React Native, Node or Android
        </span>
      </div>

      <SayHi />

      <span className="text-sm block mb-10 leading-7">
        I am a developer passionate about technology, always looking for new
        challenges and learning. With experience in several programming
        languages​ ​(such as JavaScript and Kotlin) and frameworks (such as
        React/React Native/Node and Jetpack Compose), I stand out for my ability
        to adapt efficient and creative solutions to solve complex problems.
      </span>

      <span className="text-sm block mb-10 leading-7">
        I have solid knowledge in Object-Oriented Programming, mobile
        application development, and have worked with tools such as Supabase,
        Firebase, Styled Components, AWS, Jetpack Compose, NextJS and Expo.
      </span>

      <span className="text-sm block mb-10 leading-7">
        I'm currently exploring areas such as AI applied to medicine, as well as
        expanding my skills in iOS development.
      </span>

      <span className="text-sm block mb-10 leading-7">
        My approach to development is centered on clean code, modularity, and
        good design practices. I enjoy collaborating in multidisciplinary teams,
        where I can share knowledge and learn from other professionals. I am
        interested in opportunities that allow me to continue to evolve as a
        developer, while contributing to innovative and impactful projects.
      </span>

      <span className="text-sm block mb-16 leading-7">
        Whether developing a project from scratch or optimizing existing
        systems, I am always ready to take on the next challenge and create
        solutions that make a difference.
      </span>

      {/* <span className="text-[13px] block mb-10">mapa de onde eu moro</span> */}

      {/* <Map /> */}

      <h6 className="first-letter:text-lg first-letter:font-semibold text-xs font-extrabold mb-16 -tracking-wide">
        ABOUT MY WORK
      </h6>

      <div className="flex items-center gap-5 mb-10">
        <Image src="/h4.png" alt="" width={35} height={35} />
        <div className="flex flex-col">
          <span className="font-semibold text-sm mb-0.5">H4money</span>
          <span className="text-xs text-zinc-300 font-medium">
            JR Developer | Aqui fui responsável por elaborar junto com o time um
            sistema de gestão financeira com React e React Native.
          </span>
        </div>
      </div>

      <div className="flex items-center gap-5 mb-16">
        <Image
          src="/zaal.webp"
          alt=""
          width={35}
          height={35}
          className="mb-auto"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-sm mb-0.5">Zaal</span>
          <span className="text-xs text-zinc-300 font-medium">
            PL Developer | Aqui estou responsável por:
          </span>

          <span className="text-xs font-medium flex mb-2.5 mt-5">
            - Aplicativo de cashback: um aplicativo para mostrar os anúncios e
            os códigos promocionais da empresa selecionada.
          </span>
          <span className="text-xs font-medium flex mb-2.5">
            - Site do cashback: um site completo para empresas enviarem anúncios
            para o aplicativo.
          </span>
          <span className="text-xs font-medium flex mb-2.5">
            - Aplicativo de resultado: um aplicativo para mostrar os resultados
            da sua empresa, com marcações gráficas e listas.
          </span>
          <span className="text-xs font-medium flex mb-2.5">
            - Aplicativo de MultiPDV: um aplicativo para ajudar vendedores no
            dia a dia das vendas, enviando o comprovante para o caixa.
          </span>
          <span className="text-xs font-medium flex mb-2.5">
            - Site de ERP: site ERP com integração com notas fiscais.
          </span>
        </div>
      </div>

      <h6 className="first-letter:text-lg first-letter:font-semibold text-xs font-extrabold mb-16 -tracking-wide">
        WHERE DO I HIDE
      </h6>

      <Map />
    </div>
  )
}
