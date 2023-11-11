import styles from './styles.module.scss';
import { FC } from 'react'
import ProductCard from '@/components/widgets/productCard/ProductCard';
import SlidingList from '@/components/shared/slidingList/SlidingList';
import Title from '@/components/shared/title/Title';
import { Stack } from '@chakra-ui/react';

const list = [
  {id: 1, title: 'Комбо набор пицца + роллы', price: {actual: '1,511'}},
  {id: 2, title: 'Комбо набор пицца + роллы', price: {actual: '1,511'}},
  {id: 3, title: 'Комбо набор пицца + роллы', price: {actual: '1,511'}},
  {id: 4, title: 'Комбо набор пицца + роллы', price: {actual: '1,511'}},
]

const BasketRecs:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={'12px'}>
        <Title className={styles.title} tag='h5'>Не забудьте купить</Title>
        <SlidingList
          swiperProps={{style: {padding: '10px 15px'}}}
          list={list}
          onRenderItem={(props) => <ProductCard {...props} isMini/>}
          />
      </Stack>
    </div>
  )
}

export default BasketRecs;