import { Title } from '@/components/title'
import { Brain } from 'lucide-react'

export default function Works() {
  return (
    <>
      <Title>Works</Title>

      <ul className="gap-5 grid grid-cols-1 sm:grid-cols-2">
        <li className="flex items-center space-x-5 p-2.5 group rounded-xl cursor-pointer">
          <div className="min-h-[40px] h-[40px] min-w-[40px] w-[40px] bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center justify-center rounded-xl">
            <Brain size={14} />
          </div>

          <div className="flex flex-col">
            <strong className="block font-semibold text-sm mb-0.5 group-hover:underline">
              Terapi
            </strong>

            <span className="text-zinc-400 text-left text-xs font-medium truncate max-w-[200px]">
              É um app para você registrar suas anotações de forma segura e
              levar ao seu terapeuta.
            </span>
          </div>
        </li>

        <li className="flex items-center space-x-5 p-2.5 group rounded-xl cursor-pointer">
          <div className="min-h-[40px] h-[40px] min-w-[40px] w-[40px] bg-zinc-200/50 dark:bg-zinc-700/50 flex items-center justify-center rounded-xl">
            <Brain size={14} />
          </div>

          <div className="flex flex-col">
            <strong className="block font-semibold text-sm mb-0.5">
              Terapi
            </strong>

            <span className="text-zinc-400 text-left text-xs font-medium truncate max-w-[200px]">
              É um app para você registrar suas anotações de forma segura e
              levar ao seu terapeuta.
            </span>
          </div>
        </li>
      </ul>
    </>
  )
}
