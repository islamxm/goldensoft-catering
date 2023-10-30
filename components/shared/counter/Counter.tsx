import styles from './styles.module.scss';
import { ChangeEvent, FC, useEffect, useState } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';
import {FiPlus, FiMinus} from 'react-icons/fi';
import useCounter from './hooks/useCounter';

const Counter:FC<PropsType> = ({
  defaultValue = 0,
  onChange,
  interval = [0,10],
  isFill,
  fieldProps,
  ...restProps
}) => {
  const {
    value,
    increment,
    decrement,
    handleChange
  } = useCounter({defaultValue,interval,onChange})


  return (
    <div 
      {...restProps}
      className={setClassNames([styles.wrapper, isFill && styles.fill, restProps?.className])}>
      <button 
        disabled={value === interval[0]}
        onClick={decrement}
        className={setClassNames([styles.btn])}>
          <FiMinus/>
        </button>
      <input 
        {...fieldProps} 
        className={styles.field}
        type="number" 
        value={value}
        onChange={handleChange}
        min={interval[0]}
        max={interval[1]}
        />
      <button 
        disabled={value === interval[1]}
        onClick={increment}
        className={setClassNames([styles.btn])}>
          <FiPlus/>
        </button>
    </div>
  )
}

export default Counter;