import styles from './styles.module.scss';
import { FC, memo } from 'react'
import PropsType from './types';
import ProductImage from '@/components/shared/productImage/ProductImage';
import img from '@/assets/img/promo-1.png';
import { Flex, Stack } from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import Text from '@/components/shared/text/Text';
import Link from 'next/link';
import Button from '@/components/shared/button/Button';

const PromoCardComponent:FC<PropsType> = (props) => {

  return (
    <Flex className={styles.wrapper}>
      <div className={styles.image}>
        <ProductImage
          data={{
            src: img,
            alt: '',
            style: {objectFit: 'cover'}
          }}
          heightCoef={'fill'}
          />
      </div>
      <div className={styles.body}>
          <Stack height={'100%'} gap={'12px'}>
            <Title tag='h5'>
              <Link href={'/'}>Скидка 10% в день рождения</Link>
            </Title>
            <Text 
              ellipsisLineCount={2}
              className={styles.descr}
              variant={'secondary'}>
            Акция не распространяется на сеты, комбо наборы, нагетсы, фри.
            </Text>
            <Flex
              direction={'column'}
              flex={'1 0 auto'}
              justify={'flex-end'}
              align={'flex-start'}
              >
              <Button>Посмотреть</Button>
            </Flex>
          </Stack>
      </div>
    </Flex>
  )
}

const PromoCard = memo(PromoCardComponent)
export default PromoCard;