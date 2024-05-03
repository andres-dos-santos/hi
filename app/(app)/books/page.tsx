import Link from 'next/link'

import { Title } from '@/components/title'

const query = `
  query {
    books {
      id
      title
      link
      readAt
    }
  }
`

interface BookResponse {
  id: string
  link: string
  title: string
  readAt: string
}

export const revalidate =
  process.env.NODE_ENV === 'development' ? 30 : 60 * 60 * 8 // 8 hours

async function getBooks(): Promise<BookResponse[]> {
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

  return json.data.books
}

export default async function Books() {
  const books = await getBooks()

  return (
    <>
      <Title>Livros</Title>

      <ul className="relative mt-10 border-t border-zinc-200 dark:border-zinc-700/50 pt-10">
        {books.map((book) => (
          <li key={book.id}>
            <Link
              className="flex items-center space-x-5 sm:space-x-10 group mb-5"
              href={book.link}
              target="_blank"
            >
              <span className="text-sm font-medium dark:text-zinc-400 text-zinc-500 flex items-center justify-center">
                {book.readAt.slice(0, 4)}{' '}
                <span className="h-1 w-1 bg-zinc-500 dark:bg-zinc-400 rounded-full mx-2.5" />
                {book.readAt.slice(5, 7)}
              </span>

              <span className="text-sm text-zinc-700 font-medium dark:font-normal dark:text-white group-hover:underline truncate">
                {book.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
