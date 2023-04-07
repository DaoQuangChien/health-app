import { FC } from 'react'
import images from '@assets/images'
import BurgerMenu from './components/burger-menu'
import { Link, Outlet } from 'react-router-dom'

const Root: FC = () => {
  return (
    <div className='page-container'>
      <header className='bg-dark-500 height-header fixed w-full top-0 left-0 z-50 shadow-[0_3px_6px_0_rgba(0,0,0,0.2)]'>
        <div className='flex justify-between items-center max-w-container mx-auto'>
          <img src={images.logo} alt='Logo' />
          <nav>
            <ul className='flex text-light font-thin'>
              <li>
                <Link
                  to='/'
                  className='flex items-center pl-2 pr-4 hover:text-primary-400 cursor-pointer'
                >
                  <img src={images.iconMemo} className='mr-2' />
                  自分の記録
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='flex items-center pl-2 pr-4 hover:text-primary-400 cursor-pointer'
                >
                  <img src={images.iconChallenge} className='mr-2' />
                  チャレンジ
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                  className='flex items-center pl-2 pr-4 hover:text-primary-400 cursor-pointer'
                >
                  <img src={images.iconInfo} className='mr-2' />
                  お知らせ
                </Link>
              </li>
              <li className='ml-4'>
                <BurgerMenu />
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className='content mt-header pb-16'>
        <Outlet />
      </div>
      <footer className='bg-dark-500 h-32 text-light font-thin flex items-center'>
        <nav className='max-w-container w-full mx-auto'>
          <ul className='flex gap-x-[45px]'>
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
    </div>
  )
}

export default Root
