'use client'

import { MapContainer, TileLayer } from 'react-leaflet'

import { Title } from './title'

import 'leaflet/dist/leaflet.css'

export default function Localization() {
	return (
		<MapContainer
			center={[-22.1286482, -43.153284]}
			zoom={10}
			scrollWheelZoom={false}
			className="h-[250px] mx-auto w-full rounded-xl mt-3"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	)
}
