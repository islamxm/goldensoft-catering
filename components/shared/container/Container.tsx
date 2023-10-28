import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const Container:FC<PropsType> = ({children, ...restProps}) => {
  return (
    <div {...restProps} className={setClassNames([styles.wrapper, restProps.className])}>
      {children}
    </div>
  )
}

export default Container;