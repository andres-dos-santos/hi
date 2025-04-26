import type { ComponentProps } from "react";

import { Barlow } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-title",
  weight: ["600"],
});

export function Title(props: ComponentProps<"span">) {
  return (
    <span className={`${barlow.className} font-title block text-[11px] leading-[26px] tracking-wide font-semibold text-zinc-900`}>
      {props.children}
    </span>
  )
}