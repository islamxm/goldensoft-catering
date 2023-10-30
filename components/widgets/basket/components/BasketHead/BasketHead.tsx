import styles from './styles.module.scss';
import { FC } from 'react'
import Title from '@/components/shared/title/Title';
import { Stack } from '@chakra-ui/react';
import PropsType from './types';

const BasketHead:FC<PropsType> = ({
  countPrice,
  countQuantity
}) => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={'12px'}>
        <Title tag='h3'>
          2 товара на 719 ₽ 
        </Title>
        <div className={styles.ex}>
          До минимальной суммы для доставки - 30 ₽
        </div>
      </Stack>
    </div>
  )
}

export default BasketHead;