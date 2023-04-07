import ProgressRing from '@components/progress-ring'
import { FC, useEffect, useState } from 'react'
import { Meal, MealCat, FILTER_OPTIONS } from '@services/meal-service'
import { getMeals } from '@services'

const INITIAL_PAGINATION: { offset: number; filter?: MealCat; isLoadmore: boolean } = {
  offset: 0,
  filter: undefined,
  isLoadmore: false,
}
const Home: FC = () => {
  const [data, setData] = useState<Meal[]>([])
  const [hasMore, setHasMore] = useState(false)
  const [pagination, setPagination] = useState(INITIAL_PAGINATION)
  const handleFetchData = () => {
    const filterFunc = pagination.filter
      ? (item: Meal) => item.category === pagination.filter
      : undefined
    const res = getMeals({ offset: pagination.offset, filter: filterFunc })
    const newData = pagination.isLoadmore ? [...data, ...res.data] : res.data

    setData(newData)
    setHasMore(res.hasMore)
  }
  const handleFilter = (cat: MealCat) => () => {
    if (pagination.filter === cat) {
      setPagination(INITIAL_PAGINATION)
    } else {
      setPagination({
        offset: 0,
        filter: cat,
        isLoadmore: false,
      })
    }
  }
  const handleLoadmore = () =>
    setPagination({
      ...pagination,
      offset: pagination.offset + 1,
      isLoadmore: true,
    })

  useEffect(() => {
    handleFetchData()
  }, [pagination])
  return (
    <div className='home-container'>
      <section className='stat flex'>
        <div className='achievement-rate relative grow-[2] max-w-[640px] aspect-[540/312] h-full bg-[url("@assets/images/d01.jpg")] bg-no-repeat absolute w-full h-full'>
          <ProgressRing
            className='drop-shadow-primary absolute-center'
            radius={90.5}
            progress={75}
            stroke={3}
          />
          <p className='font-inter font-normal text-lg text-light leading-[22px] drop-shadow-[0px_0px_6px_#FC7400] absolute-center'>
            05/21 <span className='text-[25px] leading-[30px]'>75%</span>
          </p>
        </div>
        <div className='graph grow-[4]'></div>
      </section>
      <section className='information max-w-container mx-auto'>
        <div className='flex flex-wrap gap-x-[84px] justify-center py-[25px]'>
          {FILTER_OPTIONS.map((item) => (
            <button
              key={item.title}
              className='bg-[url("@assets/images/hexagon.png")] bg-no-repeat w-[116px] h-[134px] font-inter text-xl text-light leading-6 flex flex-col justify-center items-center'
              onClick={handleFilter(item.title)}
            >
              <img src={item.icon} alt={item.title} />
              {item.title}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-4 gap-2 pb-7'>
          {data.map((value, i) => (
            <div key={i} className='relative aspect-square'>
              <img src={value.image} alt={value.description} className='h-full w-full' />
              <span className='absolute left-0 bottom-0 w-[130px] h-8 bg-primary-300 py-[7px] px-2 font-inter font-normal text-[15px] leading-[18px] text-light'>
                {value.description}
              </span>
            </div>
          ))}
        </div>
        {hasMore && (
          <button
            className='text-lg leading-[26px] w-[296px] h-[56px] px-1 py-4 text-light primary-gradient rounded-md block mx-auto'
            onClick={handleLoadmore}
          >
            記録をもっと見る
          </button>
        )}
      </section>
    </div>
  )
}

export default Home
