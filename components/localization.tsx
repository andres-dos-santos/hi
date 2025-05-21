'use client'

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Title } from './title'

export function Localization() {
	return (
		<>
			<Title>Where I live</Title>
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
				{/* <Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker> */}
			</MapContainer>
		</>
	)
}
