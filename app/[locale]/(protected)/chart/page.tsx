import { ChartAreaInteractive } from './components/area-chart'
import { BarChartInteractive } from './components/bar-chart'
import { LineChartInteractive } from './components/line-chart'
import { PieChartInteractive } from './components/pie-chart'

const Page = () => {
  return (
    <div className="flex flex-1 flex-col p-4 gap-4">
      <ChartAreaInteractive />
      <BarChartInteractive />
      <LineChartInteractive />
      <PieChartInteractive />
    </div>
  )
}

export default Page
