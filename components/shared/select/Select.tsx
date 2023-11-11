import styles from './styles.module.scss';
import { FC } from 'react'
import setClassNames from '@/utils/setClassNames';
import ReactSelect from 'react-select'
import PropsType from './types';


const Select:FC<PropsType> = (props) => {
  const {
    className,
    label
  } = props || {}

  return (
    <div className={styles.wrapper}>
      {label && <div className={styles.label}>{label}</div>}
      <ReactSelect
        {...props}
        className={setClassNames([styles.select, className])}
        classNamePrefix={'gs-select'}
        />
    </div>
  )
}

export default Select;