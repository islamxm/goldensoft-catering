import styles from './styles.module.scss';
import { FC, memo, useState } from 'react'
import PropsType from './types';
import Image from 'next/image';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Button from '@/components/shared/button/Button';
import placeholder from '@/assets/img/product-placeholder.png';
import Link from 'next/link';
import Title from '@/components/shared/title/Title';
import Text from '@/components/shared/text/Text';
import Price from '@/components/shared/price/Price';
import setClassNames from '@/utils/setClassNames';
import { PulseLoader } from 'react-spinners';

const ProductCardComponent:FC<PropsType> = ({
  prevImage,
  title,
  description
}) => {
  const [imageLoaded,setImageLoaded] = useState(false)
  
  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        {!imageLoaded && (
          <div className={styles.loading}>
            <PulseLoader color='var(--accent)'/>
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
          <Stack spacing={20}>
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
            <Box>
              <Text
                variant={'secondary'}
                >
                {description}  
              </Text>
            </Box>
            <Flex justify={'space-between'}>
              <Price
                pricaData={{
                  // isFrom: true,
                  actual: '379',
                  perType: {
                    value: '240',
                    unit: 'г'
                  }
                }}
                />
              <Button>Выбрать</Button>
            </Flex>
          </Stack>
      </div>
    </article>
  )
}

const ProductCard = memo(ProductCardComponent);
export default ProductCard;