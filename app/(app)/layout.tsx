export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#9090900a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:10px_10px]"></div>
      <main className="antialiased px-10 sm:px-0 mx-auto max-w-[800px]">
        {children}
      </main>
    </>
  )
}