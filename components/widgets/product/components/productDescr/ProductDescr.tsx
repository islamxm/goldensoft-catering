import styles from './styles.module.scss';
import { FC } from 'react'
import { Stack } from '@chakra-ui/react';
import PropsType from './types';
import Title from '@/components/shared/title/Title';

const ProductDescr:FC<PropsType> = ({
  title,
  children
}) => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={'4px'}>
        {title && <Title variant={'secondary'} tag='h6'>{title}</Title>}
        {
          children && (
            <div className={styles.body}>
              {children}
            </div>
          )
        }
      </Stack>
    </div>
  )
}

export default ProductDescr;