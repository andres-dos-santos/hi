import { Title } from '@/components/title'

export const revalidate = 30

interface Props {
  params: {
    id: string
  }
}

interface Post {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: { html: any }
  createdAt: string
  tags: string[]
}

const query = `
  query GET_USER($id: ID!) {
    posts(where: { id: $id }) {
      title
      tags
      content { html }
      createdAt
    }
  }
`

async function getPost(id: string): Promise<Post> {
  const response = await fetch(
    'https://api-sa-east-1.hygraph.com/v2/clcckqn423yp601uo3xcd1rh7/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables: { id } }),
    },
  )

  const json = await response.json()

  return json.data.posts[0]
}

export default async function PostBySlug(props: Props) {
  const { id } = props.params

  const data = await getPost(id)

  const html = data.content.html

  return (
    <>
      <Title className="mb-10">{data.title}</Title>

      <nav className="flex items-center gap-2 mb-10">
        {data.tags.map((tag) => (
          <button
            key={tag}
            className="border dark:border-zinc-700 px-3 py-1 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <span className="text-xs font-medium capitalize">{tag}</span>
          </button>
        ))}
      </nav>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
}
