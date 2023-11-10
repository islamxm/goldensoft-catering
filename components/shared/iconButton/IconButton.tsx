import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';
import setSquareSize from '@/utils/setSquareSize';

const IconButton:FC<PropsType> = (props) => {
  const {
    children,
    variant,
    buttonSize,
    isRound = false,
    isLoading,
    badge,
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
      style={{...restProps.style, ...setSquareSize(buttonSize)}}
      >
      {badge && <div className={styles.badge}>
        {typeof badge === 'number' ? (
          badge > 99 ? '+99' : badge
        ) : badge}  
      </div>}
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