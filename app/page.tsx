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

interface Props {
  params: { tags: string }
}

export default async function Tags(props: Props) {
  const posts = await getPosts()

  const active = 'Todos'

  return (
    <>
      <header className="flex items-center justify-between">
        <Title>Learn</Title>

        {/** <form
          action=""
          className="flex items-center bg-zinc-200/50 dark:bg-zinc-800/50 px-3 h-12 rounded-full border border-zinc-200/50 dark:border-zinc-700/50 focus-within:border-zinc-200 focus-within:dark:border-zinc-700"
        >
          <Search size={14} />
          <input
            type="text"
            className="font-medium text-xs outline-none bg-zinc-200/10 dark:bg-zinc-800/10 pl-2.5 placeholder:italic placeholder:text-zinc-500"
            placeholder="Faça uma pesquisa..."
          />
        </form> */}
      </header>

      <div className="relative mt-10 border-t border-zinc-200 dark:border-zinc-700/50 pt-10">
        <ul>
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
          <section className="border-t border-zinc-200 dark:border-zinc-700/50 pt-10">
            <header className="flex items-center justify-between mb-7 space-x-2.5">
              <strong className="text-xs font-semibold">TAGS</strong>

              <div className="flex items-center justify-between w-full text-xs text-zinc-600 font-medium dark:text-zinc-400 group-hover:underline dark:hover:text-white hover:text-zinc-900">
                <span>Ver todos</span>
              </div>
            </header>

            <ul className="flex flex-col space-y-3">
              {['Todos', 'NextJS', 'Expo', 'Android', 'Docker'].map((item) => (
                <li
                  key={item}
                  data-active={active === item}
                  className="data-[active='true']:text-zinc-900 dark:data-[active='true']:text-white flex items-center justify-between w-full text-xs text-zinc-600 font-medium dark:text-zinc-400 group-hover:underline dark:hover:text-white hover:text-zinc-900"
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-t border-zinc-200 dark:border-zinc-700/50 pt-10 mt-10">
            <strong className="text-xs font-semibold block mb-7">
              REDES SOCIAIS
            </strong>

            <ul className="flex flex-col gap-y-4">
              {[
                {
                  title: 'X ou Twitter mesmo',
                  link: 'https://twitter.com/andresdo_santos',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                    >
                      <path
                        d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: 'LinkedIn',
                  link: 'https://www.linkedin.com/in/andres-dosantos/',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                    >
                      <path
                        d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: 'Github',
                  link: 'https://github.com/andres-dos-santos',
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      fill="none"
                    >
                      <path
                        d="M6.51734 17.1132C6.91177 17.6905 8.10883 18.9228 9.74168 19.2333M9.86428 22C8.83582 21.8306 2 19.6057 2 12.0926C2 5.06329 8.0019 2 12.0008 2C15.9996 2 22 5.06329 22 12.0926C22 19.6057 15.1642 21.8306 14.1357 22C14.1357 22 13.9267 18.5826 14.0487 17.9969C14.1706 17.4113 13.7552 16.4688 13.7552 16.4688C14.7262 16.1055 16.2043 15.5847 16.7001 14.1874C17.0848 13.1032 17.3268 11.5288 16.2508 10.0489C16.2508 10.0489 16.5318 7.65809 15.9996 7.56548C15.4675 7.47287 13.8998 8.51192 13.8998 8.51192C13.4432 8.38248 12.4243 8.13476 12.0018 8.17939C11.5792 8.13476 10.5568 8.38248 10.1002 8.51192C10.1002 8.51192 8.53249 7.47287 8.00036 7.56548C7.46823 7.65809 7.74917 10.0489 7.74917 10.0489C6.67316 11.5288 6.91516 13.1032 7.2999 14.1874C7.79575 15.5847 9.27384 16.1055 10.2448 16.4688C10.2448 16.4688 9.82944 17.4113 9.95135 17.9969C10.0733 18.5826 9.86428 22 9.86428 22Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="flex items-center justify-start space-x-2.5 w-full text-xs text-zinc-600 font-medium dark:text-zinc-400 group-hover:underline dark:hover:text-white hover:text-zinc-900"
                  >
                    {item.icon}

                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  )
}
