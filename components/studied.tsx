import Image from 'next/image'
import Link from 'next/link'

export function Studied() {
  return (
    <div className="mx-auto h-screen snap-start max-w-[700px] flex flex-col items-start justify-center">
      <strong className="font-bold text-5xl leading-10 -tracking-widest">
        what I have <br /> studied
      </strong>

      <div className="mt-10">
        <p className="text-zinc-300 text-[15px] leading-[1.65rem] block mt-5">
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
        <Link
          href=""
          className="p-2 bg-zinc-800/70 w-[270px] flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 border border-zinc-800/70 hover:border-zinc-700"
        >
          <Image
            alt=""
            src="https://i.ytimg.com/vi/uyhzCBEGaBY/hq720_custom_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhgIGUoTzAP&rs=AOn4CLCX3Ps_FhHvfXbW9OOz28GxbTjA5g"
            width={250}
            height={130}
            quality={100}
            className="h-[130px] w-[250px]"
          />

          <p className="text-zinc-300 font-medium text-[12px] block mt-5">
            In this session I will show everything I have studied, besides the
            entrance exam of course.
          </p>
        </Link>
        <Link
          href=""
          className="p-2 bg-zinc-800/70 w-[270px] flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 border border-zinc-800/70 hover:border-zinc-700"
        >
          <Image
            alt=""
            src="https://i.ytimg.com/vi/uyhzCBEGaBY/hq720_custom_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhgIGUoTzAP&rs=AOn4CLCX3Ps_FhHvfXbW9OOz28GxbTjA5g"
            width={250}
            height={130}
            quality={100}
            className="h-[130px] w-[250px]"
          />

          <p className="text-zinc-300 font-medium text-[12px] block mt-5">
            In this session I will show everything I have studied, besides the
            entrance exam of course.
          </p>
        </Link>
        <Link
          href=""
          className="p-2 bg-zinc-800/70 w-[270px] flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105 border border-zinc-800/70 hover:border-zinc-700"
        >
          <Image
            alt=""
            src="https://i.ytimg.com/vi/uyhzCBEGaBY/hq720_custom_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhgIGUoTzAP&rs=AOn4CLCX3Ps_FhHvfXbW9OOz28GxbTjA5g"
            width={250}
            height={130}
            quality={100}
            className="h-[130px] w-[250px]"
          />

          <p className="text-zinc-300 font-medium text-[12px] block mt-5">
            In this session I will show everything I have studied, besides the
            entrance exam of course.
          </p>
        </Link>
      </div>
    </div>
  )
}
