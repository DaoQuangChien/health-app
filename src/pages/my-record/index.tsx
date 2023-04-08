import { TAILWIND_EXTEND_CONFIG } from '@/constants'
import Chart from '@components/chart'
import getDiaryData, {
  DEFAULT_DATE_TIME,
  Diary,
  MY_EXERCISE_DATA,
  RECORD_CATEGORIES,
} from '@services/record-service'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'

const INITIAL_PAGINATION: { offset: number; isLoadmore: boolean } = {
  offset: 0,
  isLoadmore: false,
}
const MyRecord: FC = () => {
  const date = moment(DEFAULT_DATE_TIME)
  const [navHeight, setNavHeight] = useState(TAILWIND_EXTEND_CONFIG.height.header)
  const [data, setData] = useState<Diary[]>([])
  const [hasMore, setHasMore] = useState(false)
  const [pagination, setPagination] = useState(INITIAL_PAGINATION)
  const handleFetchData = () => {
    const res = getDiaryData({ offset: pagination.offset })
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
  const handleScrollToView = (id: string) => () => {
    const element = document.getElementById(id)

    if (element) {
      const offsetTop = element.offsetTop - parseInt(navHeight)

      window.scroll({
        top: offsetTop,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    handleFetchData()
  }, [pagination])
  useEffect(() => {
    const handleOnResize = () => {
      setNavHeight(
        window.innerWidth < 768
          ? TAILWIND_EXTEND_CONFIG.height['header-xs']
          : TAILWIND_EXTEND_CONFIG.height.header,
      )
    }
    handleOnResize()
    window.addEventListener('resize', handleOnResize)
    return () => window.removeEventListener('resize', handleOnResize)
  }, [])
  return (
    <div className='my-record-container max-w-container mx-auto pt-14'>
      <section className='flex gap-12 flex-wrap mb-14 justify-center'>
        {RECORD_CATEGORIES.map((item) => (
          <button
            key={item.id}
            className='relative max-w-[288px] aspect-square border-[24px] border-primary-300 bg-[rgb(0,0,0,0.9)]'
            onClick={handleScrollToView(item.id)}
          >
            <img src={item.image} alt={item.title} className='grayscale' />
            <div className='absolute-center w-full text-center'>
              <h2 className='font-inter font-normal text-[25px] leading-[30px] text-primary-300 uppercase mb-2.5'>
                {item.title}
              </h2>
              <p className='bg-primary-400 text-light font-light w-[160px] mx-auto'>
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </section>
      <section className='flex flex-col gap-y-14'>
        <section id='body-record' className='bg-dark-500 text-light py-4 px-6'>
          <header className='flex font-inter'>
            <h3 className='max-w-[75px] text-[15px] leading-[18px] mr-2'>BODY RECORD</h3>
            <p className='text-[22px] leading-[27px]'>{date.format('YYYY.MM.DD')}</p>
          </header>
          <Chart hasSwitcher />
        </section>
        <section id='my-exercise' className='bg-dark-500 text-light py-4 px-6 h-[264px]'>
          <header className='flex font-inter'>
            <h3 className='max-w-[75px] text-[15px] leading-[18px] mr-2'>MY EXERCISE</h3>
            <p className='text-[22px] leading-[27px]'>{date.format('YYYY.MM.DD')}</p>
          </header>
          <div className='details h-[calc(100%-36px)] overflow-y-auto scrollbar'>
            <ul className='flex gap-x-10 gap-y-2 flex-wrap'>
              {MY_EXERCISE_DATA.map((data, i) => (
                <li
                  key={i}
                  className='flex before:content-["●"] before:mr-2.5 before:mt-1.5 before:text-[5px] border-b border-gray-400 basis-[99%] min-[926px]:basis-[416px] pb-1'
                >
                  <div className='text-[15px]'>
                    <p className='leading-[22px] font-light'>{data.name}</p>
                    <p className='font-inter leading-[18px] text-primary-300'>
                      {data.effectiveness}
                    </p>
                  </div>
                  <div className='ml-auto'>
                    <p className='font-inter text-lg leading-[22px] text-primary-300'>
                      {data.duration}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id='my-diary'>
          <header>
            <h3 className='font-inter text-[22px] leading-[27px] pb-2 pl-6 md:pl-0'>MY DIARY</h3>
          </header>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 pb-[30px]'>
            {data.map((value, i) => (
              <div key={i} className='aspect-square border-2 border-[#707070] p-4'>
                <h4 className='font-inter text-lg leading-[22px]'>
                  <p>{moment(value.time).format('YYYY.MM.DD')}</p>
                  <p>{moment(value.time).format('HH:mm')}</p>
                </h4>
                <p className='font-light text-xs leading-[17px] whitespace-pre-line'>
                  {value.content}
                </p>
              </div>
            ))}
          </div>
          {hasMore && (
            <button
              className='text-lg leading-[26px] w-[296px] h-[56px] px-1 py-4 text-light primary-gradient rounded-md block mx-auto'
              onClick={handleLoadmore}
            >
              自分の日記をもっと見る
            </button>
          )}
        </section>
      </section>
    </div>
  )
}

export default MyRecord
