import { useEffect, useState } from "react"

const useHeaderState = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const onScroll = (e:any) => {
    if(document.documentElement.scrollTop > 10) {
      setIsScrolled(true)
    } else setIsScrolled(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return {
    isScrolled,
    isHidden
  };
}

export default useHeaderState;