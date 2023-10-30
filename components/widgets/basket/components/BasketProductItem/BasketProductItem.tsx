import styles from './styles.module.scss';
import { FC, memo } from 'react'
import Image from 'next/image';
import Title from '@/components/shared/title/Title';
import Price from '@/components/shared/price/Price';
import Counter from '@/components/shared/counter/Counter';
import placeholder from '@/assets/img/product-placeholder.png';
import IconButton from '@/components/shared/iconButton/IconButton';
import {IoClose} from 'react-icons/io5';

const BasketProductItemComponent:FC<any> = () => {
  return (
    <article className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={placeholder}
          alt='image-alt'
          />
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          <Title tag='h5'>Запеченный с креветкой mini</Title>
          <div className={styles.delete}>
            <IconButton
              variant={'danger'}
              buttonSize='sm'>
              <IoClose/>
              </IconButton>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.mod}>Тонкое тесто</div>
          <div className={styles.bottom}>
            <div className={styles.volume}>
              350 г
            </div>
            <div className={styles.counter}>
              <Counter
                interval={[0,10]}
                />
            </div>
            <div className={styles.price}>
              <Price
                pricaData={{
                  actual:'1,079'
                }}
                />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
const BasketProductItem = memo(BasketProductItemComponent)
export default BasketProductItem;