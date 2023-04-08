import { FC, useEffect, useState } from 'react'

const THRESH_HOLD = 64
const ScrollTop: FC = () => {
  const [isTop, setIsTop] = useState(true)
  const handleOnScroll = () => setIsTop(window.scrollY - THRESH_HOLD <= 0)
  const handleScrollToTop = () =>
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
    return () => window.removeEventListener('scroll', handleOnScroll)
  }, [])
  return !isTop ? (
    <button
      className="w-12 h-12 bg-[url('@assets/images/component_scroll.png')] hover:bg-[url('@assets/images/component_scroll_hovered.png')] fixed right-24 bottom-[272px]"
      onClick={handleScrollToTop}
    />
  ) : null
}

export default ScrollTop
