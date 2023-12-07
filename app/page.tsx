import { Occupation } from '@/components/occupation'
import { Projects } from '@/components/projects'
import { Studied } from '@/components/studied'

export default function Home() {
  return (
    <div className="scroll-snap h-screen w-screen overflow-x-hidden">
      <Occupation />

      <Projects />

      <Studied />
    </div>
  )
}
