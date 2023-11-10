import { useEffect, useState } from "react"

const useHeaderState = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [actionWidth, setActionWidth] = useState<number>(0)

  

  const onScroll = (e:any) => {
    if(document.documentElement.scrollTop > 50) {
      setIsScrolled(true)
    } else setIsScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const searchClose = () => {
    setIsSearchOpen(false)
  }

  const searchOpen = () => {
    setIsSearchOpen(true)
  }

  const searchToggle = () => {
    setIsSearchOpen(s => !s)
  }

  return {
    isScrolled,
    isHidden,
    isSearchOpen,
    actionWidth,

    searchClose,
    searchOpen,
    searchToggle,
    setActionWidth
  };
}

export default useHeaderState;