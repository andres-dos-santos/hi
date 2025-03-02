export default function AppLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="antialiased px-10 sm:px-0 mx-auto max-w-[800px]">
			{children}
		</main>
	)
}
