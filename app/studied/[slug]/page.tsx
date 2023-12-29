/* eslint-disable @typescript-eslint/no-var-requires */
import Image from 'next/image'
import dayjs from 'dayjs'
import { Github } from 'lucide-react'
import Link from 'next/link'
import Head from 'next/head'

interface Props {
  params: {
    slug: string
  }
}

const url = process.env.NEXT_PUBLIC_HYGRAPH_URL ?? ''

async function getStudied(slug: string) {
  const response = await fetch(url, {
    method: 'POST',
    next: {
      revalidate: 30, // 30 seconds
    },
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query GetBySlug($slug: String!) {
          studied(where: { slug: $slug }) {
            slug
            description
            title
            githubLink
            content {
              html
            }
            updatedAt
            image {
              width
              height
              url
            }
          }
        }
      `,
      variables: { slug },
    }),
  })

  const data = await response.json()

  return data
}

export default async function Studied({ params }: Props) {
  const { data } = await getStudied(params.slug)

  return (
    <>
      <Head>
        <title>{data?.studied.title}</title>
        <meta name="description" content={data?.studied.description} />
      </Head>

      <div className="mx-auto h-screen px-10 sm:px-0 snap-start max-w-[700px] flex flex-col items-start pt-[7rem]">
        <section className="flex items-center justify-between w-full mb-10">
          <div className="flex items-center space-x-2.5">
            <Image
              src={'https://github.com/andres-dos-santos.png'}
              alt=""
              width={40}
              height={40}
              quality={100}
              className="rounded-full"
            />
            <span className="text-sm font-medium -tracking-wide">
              Andres dos Santos
            </span>
          </div>

          <div className="flex items-center space-x-2.5">
            <Link
              href={
                data?.studied.githubLink ??
                'https://github.com/andres-dos-santos'
              }
              className="flex items-center justify-center rounded-2xl bg-zinc-100/50 dark:bg-zinc-800/50 h-10 w-10 border border-zinc-200 dark:border-zinc-800"
            >
              <Github className="w-4 h-4" />
            </Link>

            <time className="text-sm text-zinc-400 -tracking-wide">
              last updated in{' '}
              {dayjs(new Date()).diff(data?.studied.updatedAt, 'day')} days
            </time>
          </div>
        </section>

        <h1 className="text-3xl font-bold -tracking-wide block mb-10">
          {data?.studied.title}
        </h1>
        <span className="text-zinc-400 -tracking-wide">
          {data?.studied.description}
        </span>

        <Image
          alt=""
          src={data.studied.image.url}
          width={800}
          height={400}
          className="my-10 w-[800px] h-[400px]"
          quality={100}
        />

        <div
          className="pb-20 mt-10 prose prose-code:font-medium prose-pre:text-[13px] prose-a:text-blue-500 prose-a:no-underline prose-pre:rounded-none dark:prose-pre:bg-zinc-800 prose-pre:bg-zinc-100 prose-pre:text-zinc-800 dark:prose-pre:text-zinc-100"
          dangerouslySetInnerHTML={{ __html: data.studied.content.html }}
        ></div>
      </div>
    </>
  )
}
