import setClassNames from '@/utils/setClassNames';
import styles from './styles.module.scss';
import { FC } from 'react'
import { Flex, Stack } from '@chakra-ui/react';
import PropsType from './types';

const ProductCalories:FC<PropsType> = () => {
  return (
    <Flex align={'center'} gap={'10px'} className={styles.wrapper}>
      <div className={setClassNames([styles.part, styles.main])}>
        <Stack>
          <div className={styles.value}>127</div>
          <div className={styles.label}>Ккал</div>
        </Stack>
      </div>
      <div className={styles.part}>
        <Stack spacing={'5px'}>
          <div className={styles.label}>Белки</div>
          <div className={styles.value}>21</div>
        </Stack>
      </div>
      <div className={styles.part}>
        <Stack spacing={'5px'}>
          <div className={styles.label}>Углеводы</div>
          <div className={styles.value}>21</div>
        </Stack>
      </div>
      <div className={styles.part}>
        <Stack spacing={'5px'}>
          <div className={styles.label}>Жиры</div>
          <div className={styles.value}>21</div>
        </Stack>
      </div>
    </Flex>
  )
}

export default ProductCalories;