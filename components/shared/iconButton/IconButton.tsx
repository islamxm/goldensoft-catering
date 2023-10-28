import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const IconButton:FC<PropsType> = (props) => {
  const {
    children,
    variant,
    buttonSize,
    isRound = false,
    isLoading,
    ...restProps
  } = props

  return (
    <button
      {...restProps}
      className={setClassNames([
        styles.wrapper, 
        styles[variant || 'simple'],
        styles[buttonSize || 'md'],
        isRound && styles.round,
        isLoading && styles.loading
      ])}
      >
      {isLoading && (
        <div className={styles.loader}></div>
      )}
      <div className={styles.body}>
      {children}
      </div>
    </button>
  )
}

export default IconButton;