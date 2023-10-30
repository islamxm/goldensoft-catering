import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const Tab:FC<PropsType> = ({
  tabId,
  tabLabel,
  data,
  isActive,
  onChange
}) => {
  return (
    <div 
      onClick={() => onChange && onChange(tabId, {tabId, tabLabel}, data)}
      className={setClassNames([styles.wrapper, isActive && styles.active])}>
      <span>{tabLabel}</span>
    </div>
  )
}

export default Tab;