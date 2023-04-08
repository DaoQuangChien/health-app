import { FC } from 'react'
import images from '@assets/images'
import BurgerMenu from './components/burger-menu'
import { Link, Outlet } from 'react-router-dom'
import ScrollTop from './components/scroll-top'
import NotificationBadge from '@components/notification-badge'

const Root: FC = () => {
  return (
    <div className='page-container'>
      <header className='bg-dark-500 height-header fixed w-full top-0 left-0 z-50 shadow-[0_3px_6px_0_rgba(0,0,0,0.2)] px-5 lg:px-0'>
        <div className='flex justify-between item-start md:items-center max-w-container mx-auto'>
          <Link to='/'>
            <img src={images.logo} alt='Logo' />
          </Link>
          <nav>
            <ul className='flex flex-col md:flex-row text-light font-light gap-y-4 pb-4 md:pb-0'>
              <li className='order-2 md:order-none'>
                <Link
                  to='/'
                  className='flex items-center pl-2 pr-4 hover:text-primary-400 cursor-pointer'
                >
                  <img src={images.iconMemo} className='mr-2' />
                  自分の記録
                </Link>
              </li>
              <li className='order-2 md:order-none'>
                <Link
                  to='/'
                  className='flex items-center pl-2 pr-4 hover:text-primary-400 cursor-pointer'
                >
                  <img src={images.iconChallenge} className='mr-2' />
                  チャレンジ
                </Link>
              </li>
              <li className='order-2 md:order-none'>
                <Link
                  to='/'
                  className='flex items-center pl-2 pr-4 hover:text-primary-400 cursor-pointer'
                >
                  <NotificationBadge count={1}>
                    <img src={images.iconInfo} className='mr-2' />
                  </NotificationBadge>
                  お知らせ
                </Link>
              </li>
              <li className='sm:ml-4 order-1 md:order-none flex justify-end pr-4 md:inline md:pr-0'>
                <BurgerMenu />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='content mt-header-xs md:mt-header pb-16'>
        <Outlet />
      </div>
      <footer className='bg-dark-500 h-32 text-light font-light flex items-center px-5 lg:px-0'>
        <nav className='max-w-container w-full mx-auto'>
          <ul className='flex flex-wrap gap-x-[45px] gap-y-4'>
            <li>
              <Link to='/'>会員登録</Link>
            </li>
            <li>
              <Link to='/'>運営会社</Link>
            </li>
            <li>
              <Link to='/'>利用規約</Link>
            </li>
            <li>
              <Link to='/'>個人情報の取扱について</Link>
            </li>
            <li>
              <Link to='/'>特定商取引法に基づく表記</Link>
            </li>
            <li>
              <Link to='/'>お問い合わせ</Link>
            </li>
          </ul>
        </nav>
      </footer>
      <ScrollTop />
    </div>
  )
}

export default Root
