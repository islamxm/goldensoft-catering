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
import Counter from '@/components/shared/counter/Counter';
import ProductImage from '@/components/shared/productImage/ProductImage';

const ProductCardComponent:FC<PropsType> = ({
  prevImage,
  title,
  description
}) => {
  const [testCount, setTestCount] = useState(0)
  
  return (
    <article className={styles.wrapper}>
      <ProductImage
        data={{
          src: prevImage,
          alt: title || 'image-alt'
        }}
        />
      <div className={styles.body}>
          <Stack spacing={'20px'}>
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
                className={styles.text}
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
              {
                testCount > 0 ? (
                  <Counter
                    interval={[0,10]}
                    defaultValue={testCount}
                    onChange={setTestCount}
                    />
                ) : (
                  <Button style={{minHeight: 40}} onClick={() => setTestCount(s => s + 1)}>Выбрать</Button>
                )
              }
              
            </Flex>
          </Stack>
      </div>
    </article>
  )
}

const ProductCard = memo(ProductCardComponent);
export default ProductCard;