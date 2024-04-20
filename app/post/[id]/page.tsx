import { Title } from '@/components/title'

interface Props {
  params: {
    id: string
  }
}

interface Post {
  title: string
  content: { html: any }
  createdAt: string
}

const query = `
  query GET_USER($id: ID!) {
    posts(where: { id: $id }) {
      title
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
      <Title>{data.title}</Title>

      <div dangerouslySetInnerHTML={{ __html: html }} className="" />
    </>
  )
}
