import { FC, useRef, useState } from 'react'
import images from '@assets/images'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import useOnClickOutside from '@/hooks/useClickOutside'

const BurgerMenu: FC = () => {
  const menuRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleToggleMenu = (value?: boolean) => () => setIsOpen(value ?? !isOpen)

  useOnClickOutside(menuRef, handleToggleMenu(false))
  return (
    <div className='relative' ref={menuRef}>
      <button onClick={handleToggleMenu()}>
        {isOpen ? (
          <img src={images.iconClose} alt='Menu' />
        ) : (
          <img src={images.iconMenu} alt='Menu' />
        )}
      </button>
      {isOpen && (
        <nav className='absolute font-light text-lg leading-[26px] w-burger-menu right-0'>
          <ul>
            <li onClick={handleToggleMenu(false)}>
              <Link to='/my-record' className={styles.menuItem}>
                自分の記録
              </Link>
            </li>
            <li onClick={handleToggleMenu(false)}>
              <Link to='/' className={styles.menuItem}>
                体重グラフ
              </Link>
            </li>
            <li onClick={handleToggleMenu(false)}>
              <Link to='/' className={styles.menuItem}>
                目標
              </Link>
            </li>
            <li onClick={handleToggleMenu(false)}>
              <Link to='/' className={styles.menuItem}>
                選択中のコース
              </Link>
            </li>
            <li onClick={handleToggleMenu(false)}>
              <Link to='/column' className={styles.menuItem}>
                コラム一覧
              </Link>
            </li>
            <li onClick={handleToggleMenu(false)}>
              <Link to='/' className={styles.menuItem}>
                設定
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}

export default BurgerMenu
