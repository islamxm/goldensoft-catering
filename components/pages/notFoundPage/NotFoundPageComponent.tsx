import styles from './styles.module.scss';
import { FC } from 'react'
import {motion} from 'framer-motion';
import useAnimated from '@/components/shared/animated/hooks/useAnimated';
import { Stack, Flex } from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import Image from 'next/image';
import img from '@/assets/img/oops.svg';
import Button from '@/components/shared/button/Button';
import Router from 'next/router';

const NotFoundPageComponent:FC<any> = () => {
  const {animateOptions}  = useAnimated()

  return (
    <motion.div 
      {...animateOptions}
      className={styles.wrapper}>
        <Stack
          gap={'40px'}
          align={'center'}
          >
          <Image
            src={img}
            alt=''
            />
          <Title tag='h2'>{'Страница не найдена :('}</Title>
          <Flex justify={'center'}>
            <Button onClick={() => Router.push('/')} buttonSize='lg'>На главную</Button>
          </Flex>
        </Stack>
    </motion.div>
  )
}

export default NotFoundPageComponent;