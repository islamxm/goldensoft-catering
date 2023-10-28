import { FC } from 'react'
import styles from './styles.module.scss';
import PropsType from './types';

const List:FC<PropsType> = ({
  list = [],
  onRenderItem
}) => {
  return (
    <div className={styles.wrapper}>
      {
        list.map((i,index) => (
          <div className={styles.item} key={index}>
            {onRenderItem(i)}
          </div>
        ))
      }
    </div>
  )
}

export default List;