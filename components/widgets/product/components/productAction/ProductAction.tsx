import { FC } from 'react'
import styles from './styles.module.scss';
import Button from '@/components/shared/button/Button';
import Text from '@/components/shared/text/Text';

const ProductAction:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.price}>
        <Text className={styles.label} variant='secondary'>
          Стоимость
        </Text>
        <Text className={styles.value}>
          1,079 ₽
        </Text>
      </div>
      <div className={styles.action}>
        <Button buttonSize='lg'>
        Добавить в корзину
        </Button>
      </div>
    </div>
  )
}

export default ProductAction;