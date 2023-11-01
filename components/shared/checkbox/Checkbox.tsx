import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import {BsCheckLg} from 'react-icons/bs';

const Checkbox:FC<PropsType> = ({
  id,
  label,
  checked,
  onChange,
  wrapperProps,
  type = 'checkbox',
  name
}) => {
  return (
    <div 
      {...wrapperProps}
      className={styles.wrapper}>
      <input 
        type={type}
        id={id}
        name={name}
        onChange={(e) => onChange && onChange(e.target.checked)}
        />
      <label className={styles.label} htmlFor={id}>
        <div className={styles.icon}>
          <div className={styles.el}>
            <BsCheckLg/>
          </div>
        </div>
        {label && (
          <div className={styles.label}>
            {label}
          </div>
        )}
      </label>
    </div>
  )
}

export default Checkbox;