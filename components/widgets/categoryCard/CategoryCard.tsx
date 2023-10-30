import styles from './styles.module.scss';
import { memo, FC, useState } from 'react'
import PropsType from './types';
import placeholder from '@/assets/img/product-placeholder.png';
import Link from 'next/link';
import Button from '@/components/shared/button/Button';
import Image from 'next/image';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import { PulseLoader } from 'react-spinners';
import setClassNames from '@/utils/setClassNames';

const CategoryCardComponent: FC<PropsType> = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        {!imageLoaded && (
          <div className={styles.loading}>
            <PulseLoader color='var(--accent)' />
          </div>
        )}
        <div className={setClassNames([styles.image_el, imageLoaded && styles.loaded])}>
          <Image
            src={placeholder}
            alt={'image-alt'}
            className={setClassNames([styles.empty])}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className={styles.body}>
        <Stack spacing={20}>
          <Box>
            <div className={styles.label}>Категория</div>
          </Box>
          <Box>
            <Link href={'/'}>
              <Title
                className={styles.title}
                tag='h5'
                element='div'
                >
                «Филадельфия»
              </Title>
            </Link>
          </Box>
          <Box>
            <Button variant={'primary_outlined'}>
              Перейти  
            </Button>   
          </Box>
        </Stack>
      </div>
    </article>
  )
}
const CategoryCard = memo(CategoryCardComponent)
export default CategoryCard;