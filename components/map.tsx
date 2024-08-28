'use client'

import { useEffect, useRef } from 'react'
import { Loader } from '@googlemaps/js-api-loader'

export function Map() {
  const mapRef = useRef(null)

  useEffect(() => {
    const onInitMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GCP_MAP_API_KEY ?? '',
        version: 'weekly',
      })

      const { Map } = await loader.importLibrary('maps')

      const { AdvancedMarkerElement } = (await loader.importLibrary(
        'marker',
      )) as google.maps.MarkerLibrary

      const position = {
        lat: -22.1287297,
        lng: -43.1506896,
      }

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: 'my-next-js-map-id',
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
      }

      const map = new Map(mapRef.current!, mapOptions)

      const _ = new AdvancedMarkerElement({
        map,
        position,
      })
    }

    onInitMap()
  }, [])

  return <div className="h-[300px]" ref={mapRef} />
}
