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
import Text from '@/components/shared/text/Text';



const CategoryCardComponent: FC<PropsType> = ({
  prevImage,
  title,
}) => {
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
            src={prevImage || placeholder}
            alt={title || 'image-alt'}
            className={setClassNames([!prevImage && styles.empty])}
            onLoadingComplete={() => setImageLoaded(true)}
          />
        </div>
      </div>
      <div className={styles.body}>
        <Stack height={'100%'} spacing={'10px'}>
          <Box>
            <Text 
              variant={'secondary'} 
              className={styles.text}>Категория</Text>
          </Box>
          <Box>
            <Link href={'/'}>
              <Title
                className={styles.title}
                tag='h5'
                element='div'
                >
                {title}
              </Title>
            </Link>
          </Box>
          <Box flex={'1 0 auto'} className={styles.action}>
            <Button isFill variant={'primary'}>
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