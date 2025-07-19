'use client'

import hljs from 'highlight.js'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import 'highlight.js/styles/github.css'

export default function Article({ content }: { content: string }) {
	useEffect(() => {
		hljs.highlightAll()
	}, [])

	return (
		<div className="prose max-w-none px-6 mt-10">
			<ReactMarkdown>{content}</ReactMarkdown>
		</div>
	)
}
