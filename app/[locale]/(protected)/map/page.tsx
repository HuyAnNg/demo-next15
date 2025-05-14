import data from './components/data.json'
import { MapComponentLeaflet } from './components/map-component'

const Page = () => {
  return (
    <div className="flex flex-1 flex-col">
      <MapComponentLeaflet data={data} />
    </div>
  )
}

export default Page
