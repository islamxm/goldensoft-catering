import styles from './styles.module.scss';
import { FC } from 'react'
import BasketProductItem from '../BasketProductItem/BasketProductItem';
import { Stack, Box } from '@chakra-ui/react';
import BasketPromo from '../BasketPromo/BasketPromo';
import BasketRecs from '../BasketRecs/BasketRecs';

const BasketContent:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={'25px'}>
        <Box>
          <Stack spacing={'12px'}>
            <BasketProductItem/>
            <BasketProductItem/>
          </Stack>
        </Box>
        <BasketRecs/>
        <BasketPromo/>
      </Stack>
    </div>
  )
}

export default BasketContent;