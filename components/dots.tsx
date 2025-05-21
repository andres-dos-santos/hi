export function Dots() {
	return (
		<div className="my-20">
			{Array.from({ length: 3 }, (_, i) => (
				<span
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={i}
					className="inline-block h-[2px] w-[2px] rounded-full bg-zinc-500/85 ring-1 ring-zinc-700/10 mr-2"
				/>
			))}
		</div>
	)
}
