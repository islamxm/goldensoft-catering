import setClassNames from '@/utils/setClassNames';
import styles from './styles.module.scss';
import { FC, HTMLProps } from 'react'

const Preloader:FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div 
      {...props}
      className={setClassNames([styles.wrapper, props?.className])}>
      <div className={styles.content}></div>
    </div>
  )
}

export default Preloader;