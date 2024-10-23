import Image from 'next/image'
import Link from 'next/link'

// export const revalidate =
//   process.env.NODE_ENV === 'development' ? 30 : 60 * 60 * 1 // 1 hour

// interface Post {
//   title: string
//   id: string
//   createdAt: string
// }

// const queryWithoutSearches = `
//   query {
//     posts(orderBy: createdAt_DESC) {
//       title
//       id
//       createdAt
//     }
//   }
// `

// const queryWithSearches = `
//   query GetLearnPosts($searched: String) {
//     posts(where: { title_contains: $searched }, orderBy: createdAt_DESC) {
//       title
//       id
//       createdAt
//     }
//   }
// `

// async function getPosts(searched?: string): Promise<Post[]> {
//   const payload = searched
//     ? { query: queryWithSearches, variables: { searched } }
//     : { query: queryWithoutSearches }

//   const response = await fetch(
//     'https://api-sa-east-1.hygraph.com/v2/clcckqn423yp601uo3xcd1rh7/master',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     },
//   )

//   const json = await response.json()

//   return json.data ? json.data.posts : []
// }

export default async function Learns() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex items-baseline mb-8 mt-10 gap-5">
        <h6 className="font-medium -tracking-wider">Hello!</h6>
      </div>

      <span className="text-sm block mb-10 leading-7 -tracking-wide">
        My name is Andres, I am a programmer specialized in React and React
        Native, very good with Node and learning Android, contact me on{' '}
        <Link href="http://linkedin.com/in/andres-dosantos/" target="__blank">
          LinkedIn
        </Link>
        .
      </span>

      <span className="text-sm block mb-10 leading-7 -tracking-wide">
        I have 1 published application so far.
      </span>

      <hr />

      <ul className="mt-10">
        <li className="flex items-center gap-x-5">
          <Image
            src="/zaal-result-logo.png"
            alt=""
            width={60}
            height={60}
            quality={100}
          />

          <div className="flex flex-col">
            <strong className="text-xs font-semibold -tracking-wider mb-1">
              ZAAL RESULTADO
            </strong>

            <span className="text-xs text-zinc-500 leading-4">
              <span className="font-medium">(Android/iOS)</span> Zaal Resultado
              is the ideal application for companies that want to monitor and
              analyze their performance effectively.
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}
