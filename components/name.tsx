import { Cormorant } from "next/font/google";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export function Name() {
  return (
    <h1 className={`${cormorant.variable} font-cormorant text-zinc-800/90 font-medium text-4xl -tracking-wide`}>
      Andres dos Santos
    </h1>
  )
}