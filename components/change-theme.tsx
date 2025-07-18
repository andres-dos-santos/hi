'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const Icon = {
	dark: <Sun className="size-3.5" />,
	light: <Moon className="size-3.5" />,
}

type Theme = 'dark' | 'light' | undefined

type UseTheme = {
	theme: Theme
	setTheme(theme: Theme): void
}

export function ThemeChanger() {
	const { theme, setTheme } = useTheme() as UseTheme

	function handleChangeTheme() {
		setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
		<button type="button" onClick={handleChangeTheme}>
			{theme && Icon[theme]}
		</button>
	)
}
