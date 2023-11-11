import styles from './styles.module.scss';
import { FC } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper/modules';
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const SlidingList:FC<PropsType> = ({
  list = [],
  swiperProps,
  onRenderItem
}) => {
  

  return (
    <div className={styles.wrapper}>
      <Swiper
        {...swiperProps}
        spaceBetween={swiperProps?.spaceBetween || 12}
        className={setClassNames([styles.slider])}
        slidesPerView={'auto'}
        modules={[FreeMode]}
        >
        {
          list.map((i, index) => (
            <SwiperSlide
              className={styles.slide}
              key={index}
              >
              {onRenderItem(i)}
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default SlidingList;