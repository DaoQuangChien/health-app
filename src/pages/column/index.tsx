import getColumnData, { Column, RECOMMENDED_COLUMNS } from '@services/column-service'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'

const INITIAL_PAGINATION: { offset: number; isLoadmore: boolean } = {
  offset: 0,
  isLoadmore: false,
}
const Column: FC = () => {
  const [data, setData] = useState<Column[]>([])
  const [hasMore, setHasMore] = useState(false)
  const [pagination, setPagination] = useState(INITIAL_PAGINATION)
  const handleFetchData = () => {
    const res = getColumnData({ offset: pagination.offset })
    const newData = pagination.isLoadmore ? [...data, ...res.data] : res.data

    setData(newData)
    setHasMore(res.hasMore)
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
    <div className='column-container max-w-container mx-auto pt-14'>
      <section className='flex flex-wrap gap-x-8 gap-y-6 mb-14'>
        {RECOMMENDED_COLUMNS.map((column) => (
          <div key={column.title} className='bg-dark-600 py-4 text-center text-light basis-[216px]'>
            <h3 className='font-inter text-[22px] leading-[27px] text-primary-300 pb-2.5 mb-2 relative before:content-[""] before:absolute before:bottom-0 before:left-1/2 before:translate-x-[-50%] before:block before:w-14 before:h-px before:bg-light'>
              {column.title}
            </h3>
            <p className='font-thin text-lg leading-[26px]'>{column.description}</p>
          </div>
        ))}
      </section>
      <section>
        <div className='grid grid-cols-4 gap-3 pb-[26px]'>
          {data.map((value, i) => (
            <div key={i} className=''>
              <div>
                <img src={value.image} alt={value.image} />
                <p>
                  <span>{moment(value.date).format('YYYY.MM.DD')}</span>
                  <span>{moment(value.date).format('HH:mm')}</span>
                </p>
              </div>
              <p>{value.description}</p>
              <div>
                {value.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        {hasMore && (
          <button
            className='text-lg leading-[26px] w-[296px] h-[56px] px-1 py-4 text-light primary-gradient rounded-md block mx-auto'
            onClick={handleLoadmore}
          >
            コラムをもっと見る
          </button>
        )}
      </section>
    </div>
  )
}

export default Column
