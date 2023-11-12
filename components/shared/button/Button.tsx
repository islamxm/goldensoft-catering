import setClassNames from '@/utils/setClassNames';
import styles from './styles.module.scss';
import PropsType, {ButtonVariant} from './type';
import { FC } from 'react'
import { PulseLoader } from 'react-spinners';

// const st:Record<ButtonVariant, any> = {
//   simple: 'undefined',
//   simple_danger: 'undefined',
//   danger: 'undefined',
//   danger_outlined: 'undefined',
//   primary: 'undefined',
//   primary_outlined: 'undefined',
// }

const Button:FC<PropsType> = (props) => {
  const {
    children,
    variant,
    buttonSize,
    isRound = true,
    endContent,
    startContent,
    isLoading,
    isFill,
    ...restProps
  } = props

  return (
    <button 
      {...restProps}
      className={setClassNames([
        styles.wrapper, 
        styles[variant || 'primary'],
        styles[buttonSize || 'md'],
        isRound && styles.round,
        isLoading && styles.loading,
        isFill && styles.fill,
        restProps?.className
      ])}>
      {isLoading && (
        <div className={styles.loader}>
          {<PulseLoader className={styles.loader_el}/>}
        </div>
      )}
      <div className={styles.body}>
        
        {startContent && (
          <div className={setClassNames([styles.ex, styles.start])}>{startContent}</div>
        )}
        {children}
        {endContent && (
          <div className={setClassNames([styles.ex, styles.end])}>{endContent}</div>
        )}
      </div>
      
    </button>
  )
}

export default Button;