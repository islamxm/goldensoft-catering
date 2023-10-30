import { 
  FC, 
  PropsWithChildren, 
  createContext, 
  useState 
} from 'react'
import componentBaseAnimationProps from '@/data/componentBaseAnimationProps';
import { AnimatePresence } from 'framer-motion';

export const AnimationContext = createContext<typeof componentBaseAnimationProps | undefined>(undefined)

const Animated:FC<PropsWithChildren> = ({
  children,
}) => {
  //после определения сртуктуры данное состояние нужно вывести на глобальный уровень
  const [isAnimated, setIsAnimated] = useState<undefined | boolean>(true)

  return (
    <AnimationContext.Provider 
      value={isAnimated ? componentBaseAnimationProps : undefined}>
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </AnimationContext.Provider>
  )
}

export default Animated;