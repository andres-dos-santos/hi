export function Logo() {
  return (
    <div className="flex items-center space-x-2.5">
      <div className="border-2 border-zinc-900 h-8 w-8 dark:border-white flex items-center justify-center relative">
        <div className="h-[2px] w-3 z-10 bg-orange-500 -rotate-45 absolute"></div>
        <div className="h-[2px] w-5 bg-zinc-900 dark:bg-white rotate-45 absolute"></div>
      </div>

      <span className="text-xs font-semibold">ANDRES DOS SANTOS</span>
    </div>
  )
}
