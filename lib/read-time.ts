export function readTime(text: string) {
	const words = text.trim().split(/\s+/)

	return Math.ceil(words.filter((p) => p.length > 0).length / 200)
}
