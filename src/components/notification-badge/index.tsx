import { FC, ReactElement } from 'react'

interface Props {
  count: number
  children: ReactElement
}
const NotificationBadge: FC<Props> = ({ count, children }) => {
  return (
    <span className='relative'>
      {children}
      <sup className='absolute left-[20.5px] top-[-3px] w-[16px] h-[16px] rounded-full bg-primary-500 text-light font-inter text-[10px] leading-[12px] flex justify-center items-center'>
        {count}
      </sup>
    </span>
  )
}

export default NotificationBadge
