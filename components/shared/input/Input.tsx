import styles from './styles.module.scss';
import { FC, useEffect } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';
import useInput from './utils/useInput';
import { useMask, InputMask } from '@react-input/mask';

const Input:FC<PropsType> = (props) => {
  const {
    startContent,
    endContent,
    label,
    error,
    maskOptions,
    ...restProps
  } = props;

  const {
    inputRef,
    focused,
    handleFocus,
    handleBlur,
    handleChange
  } = useInput(restProps)


  return (
    <div className={setClassNames([
        styles.wrapper
      ])}>

      {label && <div className={styles.label}>{label}</div>}

      <div className={setClassNames([
        styles.field,
        focused && styles.focused,
        error && styles.error,
        startContent && styles.startContent,
        endContent && styles.endContent
      ])}>
      
        {
          startContent && (
            <div className={setClassNames([styles.ex, styles.start])}>
              {startContent}
            </div>
          )
        }

        <input 
          {...restProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          className={setClassNames([styles.input, restProps?.className])}
          // ref={inputRef}
          />
       
        {
          endContent && (
            <div className={setClassNames([styles.ex, styles.end])}>
              {endContent}
            </div>
          )
        }

      </div>
      {(error && typeof error === 'string') && <div className={styles.error_message}>{error}</div>}
    </div>
  )
}

export default Input;