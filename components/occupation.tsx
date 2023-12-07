export function Occupation() {
  return (
    <div className="mx-auto h-screen snap-start max-w-[700px] flex flex-col items-start justify-center">
      <header className="flex items-center justify-between mb-5 w-full">
        <span className="text-zinc-300 font-semibold text-[11px] block">
          OPEN TO WORK
        </span>

        <button className="flex items-center font-semibold text-[11px] tracking-wider group">
          <div className="h-px w-10 bg-white mr-1.5 transition-all duration-300 group-hover:-translate-x-3"></div>
          DOWNLOAD MY CV
        </button>
      </header>

      <strong className="font-bold text-5xl leading-10 -tracking-widest">
        Software <br /> Developer
      </strong>

      <div className="mt-10">
        <p className="text-zinc-300 text-[15px] leading-[1.65rem]">
          Greetings! I'm <strong className="text-white">Andres</strong>, a
          dedicated software developer driven by a passion for creating digital
          solutions that transcend borders. With a talent for React, Next,
          NodeJS, I dive into projects with an unwavering commitment to
          innovation and efficiency.
        </p>

        <p className="text-zinc-300 text-[15px] leading-[1.65rem] block mt-5">
          My journey in software development is fueled by a tireless quest to
          become a game developer. Explore my portfolio to witness how I combine
          technical knowledge with creativity to create impactful, integrated
          software solutions.
        </p>
      </div>
    </div>
  )
}
