'use client'

import { useEffect } from 'react'
import { useStore } from '../store'
import { MapDetailLeaflet } from './map-detail'

export const MapComponentLeaflet = ({ data }: { data: any }) => {
  const { setCamCoordinateList } = useStore((state) => state)
  useEffect(() => {
    setCamCoordinateList(data)
  }, [data])

  return <MapDetailLeaflet data={data} />
}
