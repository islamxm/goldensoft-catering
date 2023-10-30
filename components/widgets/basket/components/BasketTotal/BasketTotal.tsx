import styles from './styles.module.scss';
import { FC } from 'react'
import { Stack } from '@chakra-ui/react';
import Button from '@/components/shared/button/Button';
import {FiChevronRight} from 'react-icons/fi'

const BasketTotal:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={'15px'}>
        {/* <div className={styles.top}>

        </div>
        <div className={styles.divider}></div> */}
        <div className={styles.list}>
          <Stack spacing={'8px'}>
          <div className={styles.item}>
            <div className={styles.label}>Начислим баллы</div>
            <div className={styles.value}>+36</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>2 товара</div>
            <div className={styles.value}>719 ₽</div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Доставка</div>
            <div className={styles.value}>Бесплатно</div>
          </div>
          </Stack>
          
        </div>
        <div className={styles.divider}></div>
        <div className={styles.total}>
          <div className={styles.label}>Сумма заказа</div>
          <div className={styles.value}>1,079 ₽</div>
        </div>
        <div className={styles.divider}></div>
        <Button 
          endContent={<FiChevronRight/>} 
          buttonSize='lg' 
          isFill>
            К оформлению заказа
        </Button>
      </Stack>
    </div>
  )
}

export default BasketTotal;