import styles from './styles.module.scss';
import { FC } from 'react'
import { Stack } from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import Button from '@/components/shared/button/Button';
import Input from '@/components/shared/input/Input';

const BasketPromo:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <Stack spacing={'12px'}>
        <Title tag='h4'>Промокод</Title>
        <div className={styles.body}>
          <div className={styles.input}>
            <Input
              />
          </div>
          <Button
            variant={'simple_danger'}
            >
            применить 
          </Button>  
        </div>
      </Stack>      
    </div>
  )
}

export default BasketPromo;