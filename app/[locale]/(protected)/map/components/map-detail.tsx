'use client'

import L, { Icon } from 'leaflet'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'
import { useMemo } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useStore } from '../store'
import { Point } from '../type'

export const MapDetailLeaflet = ({ data }: { data: any }) => {
  const { camCoordinateList } = useStore((state) => state)
  console.log('data', data)
  const DEFAULT_CENTER = useMemo(
    () => ({
      lat: data[0].position.lat !== null ? data[0].position.lat : 21.0285,
      lng: data[0].position.lng !== null ? data[0].position.lng : 105.8048,
    }),
    [data],
  )

  return (
    <div className="w-full h-[calc(100vh-150px)] pt-2">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={12}
        maxZoom={20}
        zoomControl
        attributionControl={false}
        className="w-full h-full"
      >
        <TileLayer
          maxNativeZoom={20}
          maxZoom={20}
          url={'http://mt0.google.com/vt/lyrs=m&hl=vi&x={x}&y={y}&z={z}'}
        />

        <MarkersCustom points={camCoordinateList} />
      </MapContainer>
    </div>
  )
}

const MarkersCustom = ({ points }: { points: Point[] }) => {
  const mapMarkIcon = new Icon({
    iconUrl: '/pin.png',
    iconSize: [40, 40],
  })
  const createClusterCustomIcon = function (cluster: any) {
    return L.divIcon({
      html: `<span>${cluster.getChildCount()}</span>`,
      className: 'marker-cluster-custom',
      iconSize: L.point(40, 40, true),
    })
  }
  return (
    // <MarkerClusterGroup iconCreateFunction={createClusterCustomIcon}>
    <>
      {points.map((i) => (
        <Marker
          draggable={false}
          key={i.key}
          position={{ lat: i.position.lat, lng: i.position.lng }}
          icon={mapMarkIcon}
        >
          <Popup>
            <p className="text-base font-semibold">{i?.name}</p>

            <p>
              Tọa độ: {i?.position.lat} - {i?.position.lng}
            </p>
          </Popup>
        </Marker>
      ))}
      {/* </MarkerClusterGroup> */}
    </>
  )
}
