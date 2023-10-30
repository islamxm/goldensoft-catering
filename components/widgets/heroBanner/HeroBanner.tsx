import styles from './styles.module.scss';
import { FC } from 'react'
import {Pagination, EffectFade} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react';
import Container from '@/components/shared/container/Container';
import Image from 'next/image';
import img from '@/assets/img/heroBanner.png'
import PropsType from './types';

const HeroBanner:FC<PropsType> = ({
  list = []
}) => {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.container}>
        <div className={styles.in}>
          <Swiper
            effect={'fade'}
            spaceBetween={30}
            autoplay={{delay: 5000}}
            speed={700}
            pagination={{
              el: `.${styles.pagination}`,
              bulletClass: styles.pagination_item,
              bulletActiveClass: styles.pagination_item_active,
            }}
            modules={[Pagination, EffectFade]}
            className={styles.slider}
            >
            <SwiperSlide className={styles.slide}>
              <Image
                priority
                src={img}
                alt=''
                />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image
                src={img}
                alt=''
                />
            </SwiperSlide>
            <div id='heroBanner-pagination' className={styles.pagination}></div>
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default HeroBanner;