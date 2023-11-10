import { useEffect, useRef, useState } from "react";

const useCollapsable = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if(ref?.current) {
      if(isOpen) {
        setHeight(ref?.current?.scrollHeight)
      } else setHeight(0)
    }
  }, [ref, isOpen])

  const onToggle = () => {
    setIsOpen(s => !s)
  }

  const onOpen = () => setIsOpen(true)
  const onClose = () => setIsOpen(false)

  return {
    ref,
    isOpen,
    style: {height, overflow: 'hidden'},
    onToggle,
    onOpen,
    onClose
  }
}

export default useCollapsable;