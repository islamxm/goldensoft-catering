import { FC } from 'react'
import styles from './styles.module.scss';
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const List:FC<PropsType> = ({
  list = [],
  onRenderItem,
  className,
  gap = 12,
  countItemsInRow = 5
}) => {
  return (
    <div 
      style={{
        marginLeft: `-${gap / 2}px`,
        marginRight: `-${gap / 2}px`
      }}
      className={setClassNames([styles.wrapper, className])}>
      {
        list.map((i,index) => (
          <div 
            style={{
              marginLeft: gap / 2,
              marginRight: gap / 2,
              marginBottom: gap,
              width: `calc((100% / ${countItemsInRow}) - ${gap}px)`
            }}
            className={styles.item} 
            key={index}>
            {onRenderItem(i)}
          </div>
        ))
      }
    </div>
  )
}

export default List;