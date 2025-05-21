import { FileText } from 'lucide-react'

export function DownloadCV() {
	return (
		<a
			download
			href="/cv.pdf"
			target="_blank"
			className="flex items-center gap-1.5 justify-center ml-auto h-9 w-40 border rounded-xl shadow-sm hover:border-zinc-300 hover:shadow-sm transition-all duration-500"
			type="button"
			rel="noreferrer"
		>
			<FileText className="size-3.5 text-zinc-500" />
			<span className="text-xs">Download my CV</span>
		</a>
	)
}
