import { RECORD_CATEGORIES } from '@services/record-service'
import { FC } from 'react'

const MyRecord: FC = () => {
  return (
    <div className='my-record-container max-w-container mx-auto pt-14'>
      <section className='flex gap-12 flex-wrap'>
        {RECORD_CATEGORIES.map((item) => (
          <button
            key={item.title}
            className='relative max-w-[288px] aspect-square border-[24px] border-primary-300 bg-[rgb(0,0,0,0.9)]'
          >
            <img src={item.image} alt={item.title} className='grayscale' />
            <div className='absolute-center w-full text-center'>
              <h4 className='font-inter font-normal text-[25px] leading-[30px] text-primary-300 uppercase mb-2.5'>
                {item.title}
              </h4>
              <p className='bg-primary-400 text-light font-thin w-[160px] mx-auto'>
                {item.description}
              </p>
            </div>
          </button>
        ))}
      </section>
    </div>
  )
}

export default MyRecord
