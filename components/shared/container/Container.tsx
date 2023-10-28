import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react'

const Container:FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

export default Container;