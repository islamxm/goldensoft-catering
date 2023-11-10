import IconButton from "@/components/shared/iconButton/IconButton";
import {FiArrowUp} from 'react-icons/fi';
import styles from './styles.module.scss';
import {FC, useEffect, useState} from 'react';
import setClassNames from "@/utils/setClassNames";

const GoToTop:FC = () => {
  const [isActive, setIsActive] = useState(false)
  const goToTop = () => document.documentElement.scrollTo(0,0)

  const toggleIsActive = () => {
    if(document.documentElement.scrollTop > 50) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleIsActive)
    return () => window.removeEventListener('scroll', toggleIsActive)
  }, [])


  return (
    <div className={setClassNames([styles.wrapper, isActive && styles.active])}>
      <IconButton
        onClick={goToTop}
        variant={'primary'}
        buttonSize={72}
        isRound
        >
        <FiArrowUp size={30}/>      
      </IconButton>
    </div>
  )
}

export default GoToTop;