interface Props {
  params: {
    slug: string
  }
}

export default function Studied({ params }: Props) {
  return (
    <div className="mx-auto h-screen px-10 sm:px-0 snap-start max-w-[700px] flex flex-col items-start justify-center">
      <h1>{params.slug}</h1>
    </div>
  )
}
