'use client'

import { Loader } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { Title } from './title'

export function MapRender() {
	const Localization = useMemo(
		() =>
			dynamic(() => import('@/components/localization'), {
				loading: () => <Loader className="animate-spin" />,
				ssr: false,
			}),
		[],
	)

	return (
		<>
			<Title>Where I live</Title>

			<Localization />
		</>
	)
}
