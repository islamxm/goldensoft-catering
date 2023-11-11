import styles from './styles.module.scss';
import { FC } from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';
import img from '@/assets/img/preloader-img.svg';
import { Stack } from '@chakra-ui/react';
import useAnimated from '@/components/shared/animated/hooks/useAnimated';
import { PulseLoader } from 'react-spinners';

const AppPreloader:FC = () => {
  const {animateOptions} = useAnimated()

  return (
    <motion.div 
      {...animateOptions}
      className={styles.wrapper}>
      <div className={styles.content}>
        <Stack spacing={'35px'} align={'center'}>
          <Image
            src={img}
            alt='Welcome! Loading...'
            />
          <PulseLoader size={30} color='var(--accent)'/>
        </Stack>
      </div>
    </motion.div>
  )
}

export default AppPreloader;