import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import BasketHead from './components/BasketHead/BasketHead';
import BasketTotal from './components/BasketTotal/BasketTotal';
import BasketContent from './components/BasketContent/BasketContent';

const Basket:FC<PropsType> = ({
    
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <BasketHead/>
      </div>
      <div className={styles.content}>
        <BasketContent/>
      </div>
      <div className={styles.total}>
        <BasketTotal/>
      </div>
    </div>
  )
}

export default Basket;