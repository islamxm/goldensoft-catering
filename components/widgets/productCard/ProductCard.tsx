import styles from './styles.module.scss';
import { FC, memo } from 'react'
import PropsType from './types';
import Image from 'next/image';
import { Box, Stack } from '@chakra-ui/react';
import Button from '@/components/shared/button/Button';
import placeholder from '@/assets/img/product-placeholder.png';

const ProductCardComponent:FC<PropsType> = ({
  prevImage,
  title,
  description
}) => {

  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        <div className={styles.image_el}>
          <Image
            src={prevImage || placeholder}
            alt=''
            />
        </div>
      </div>
      <div className={styles.body}>
          <Stack spacing={20}>
            <Box>
              {title}
            </Box>
            <Box>
              {description}
            </Box>
            <Box>
              <Button>Press me</Button>
            </Box>
          </Stack>
      </div>
    </article>
  )
}

const ProductCard = memo(ProductCardComponent);
export default ProductCard;