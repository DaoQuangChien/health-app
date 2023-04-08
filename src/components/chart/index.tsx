import { FC } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { TAILWIND_EXTEND_CONFIG } from '@/constants'

const data = [
  {
    name: '6月',
    val1: 90,
    val2: 90,
  },
  {
    name: '7月',
    val1: 85,
    val2: 80,
  },
  {
    name: '8月',
    val1: 60,
    val2: 65,
  },
  {
    name: '9月',
    val1: 70,
    val2: 60,
  },
  {
    name: '10月',
    val1: 65,
    val2: 40,
  },
  {
    name: '11月',
    val1: 55,
    val2: 50,
  },
  {
    name: '12月',
    val1: 65,
    val2: 45,
  },
  {
    name: '1月',
    val1: 50,
    val2: 40,
  },
  {
    name: '2月',
    val1: 45,
    val2: 35,
  },
  {
    name: '3月',
    val1: 40,
    val2: 30,
  },
  {
    name: '4月',
    val1: 35,
    val2: 25,
  },
  {
    name: '5月',
    val1: 40,
    val2: 20,
  },
]
const buttons = ['日', '週', '月', '年']
interface Props {
  hasSwitcher?: boolean
}
const Chart: FC<Props> = ({ hasSwitcher }) => {
  return (
    <>
      <ResponsiveContainer width='99%' height={312}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis dataKey='name' tick={{ fill: TAILWIND_EXTEND_CONFIG.colors.light }} />
          <YAxis tick={false} />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='val1'
            stroke={TAILWIND_EXTEND_CONFIG.colors['primary-300']}
            strokeWidth={3}
          />
          <Line
            type='monotone'
            dataKey='val2'
            stroke={TAILWIND_EXTEND_CONFIG.colors['secondary-300']}
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
      {hasSwitcher && (
        <div className='flex gap-x-4 ml-16'>
          {buttons.map((btn) => (
            <button
              key={btn}
              className='text-[15px] leading-[22px] bg-light text-primary-300 text-center w-[56px] h-[24px] rounded-[11px] hover:bg-primary-300 hover:text-light'
            >
              {btn}
            </button>
          ))}
        </div>
      )}
    </>
  )
}

export default Chart
