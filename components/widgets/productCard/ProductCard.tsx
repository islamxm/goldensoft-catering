import styles from './styles.module.scss';
import { FC, memo, useState } from 'react'
import PropsType from './types';
import { Box, Flex, Stack } from '@chakra-ui/react';
import Button from '@/components/shared/button/Button';
import Link from 'next/link';
import Title from '@/components/shared/title/Title';
import Text from '@/components/shared/text/Text';
import Price from '@/components/shared/price/Price';
import setClassNames from '@/utils/setClassNames';
import Counter from '@/components/shared/counter/Counter';
import ProductImage from '@/components/shared/productImage/ProductImage';
import IconButton from '@/components/shared/iconButton/IconButton';
import {FiPlus} from 'react-icons/fi';

const ProductCardComponent:FC<PropsType> = ({
  prevImage,
  title,
  description,
  isMini
}) => {
  const [testCount, setTestCount] = useState(0)

  if(isMini) {
    return (
      <Flex as={'article'} className={setClassNames([styles.wrapper, styles.mini])}>
        <div className={styles.image}>
          <ProductImage
            data={{
              src: prevImage,
              alt: title || 'image-alt',
            }}
            />
        </div>
        <div className={styles.body}>
          <Flex gap={'5px'} direction={'column'}>
            <Title tag='h6'><Link href={'/'}>{title}</Link></Title>
            <Flex gap={'5px'} align={'flex-end'} justify={'space-between'}>
              <Price
                pricaData={{
                  // isFrom: true,
                  actual: '379',
                }}
                className={styles.price}
                />
                {
                  testCount > 0 ? (
                    <Counter
                      wrapperProps={{className: styles.counter}}
                      interval={[0,10]}
                      defaultValue={testCount}
                      onChange={setTestCount}
                      
                      />
                  ) : (
                    <IconButton onClick={() => setTestCount(s => s + 1)} variant={'primary'}><FiPlus/></IconButton>
                  )
                }
            </Flex>
          </Flex>
        </div>
      </Flex>
    )
  }
  
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
              <Title
                className={styles.title}
                tag='h5'
                as='div'
                >
                <Link href={'/'}>{title}</Link>
              </Title>
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