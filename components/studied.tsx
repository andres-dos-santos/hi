import Image from 'next/image'
import Link from 'next/link'

interface Data {
  slug: string
  description: string
  image: {
    width: number
    height: number
    url: string
  }
}

const url = process.env.NEXT_PUBLIC_HYGRAPH_URL ?? ''

async function getStudieds() {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          studieds {
            slug
            description
            image {
              width
              height
              url
            }
          }
        }
      `,
    }),
  })

  const data = await response.json()

  return data
}

export async function Studied() {
  const { data } = await getStudieds()

  return (
    <div className="mx-auto h-screen px-10 sm:px-0 snap-start max-w-[700px] flex flex-col items-start justify-center">
      <strong className="font-bold text-3xl sm:text-5xl leading-5 sm:leading-10 -tracking-widest">
        what I have <br /> studied
      </strong>

      <div className="mt-10">
        <p className="text-zinc-300 text-[13px] sm:text-[15px] leading-[1.25rem] sm:leading-[1.65rem] block mt-5">
          In this session I will show everything I have studied, besides the
          entrance exam of course.
        </p>
      </div>

      <Link
        href=""
        className="text-sm text-white mt-10 flex items-center group"
      >
        <p className="underline">See more</p>
        <strong className="transition-all duration-300 group-hover:translate-x-2 ml-1.5">
          ⟶
        </strong>
      </Link>

      <div className="flex items-center mt-10 space-x-2.5">
        {data.studieds.map((item: Data) => (
          <Link
            href={item.slug}
            className="p-5 bg-zinc-800/70 w-[270px] rounded-xl flex flex-col items-center justify-center transition-transform duration-200 border border-zinc-800/70 hover:border-zinc-700"
          >
            <Image
              alt=""
              src={item.image.url}
              width={item.image.width}
              height={item.image.height}
              quality={100}
              className="h-[130px] w-[250px] rounded-lg"
            />

            <p className="text-zinc-300 font-medium text-[13px] block mt-5">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
