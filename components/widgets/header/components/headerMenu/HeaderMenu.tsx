import styles from './styles.module.scss';
import { FC, useContext, useEffect, useRef } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import Link from 'next/link';
import { HeaderContext } from '../../utils/HeaderContext';
import setClassNames from '@/utils/setClassNames';
import Button from '@/components/shared/button/Button';
import Router from 'next/router';
const listMock = [
  'Комбо наборы',
  'Пицца',
  'Роллы',
  'Суши',
  'Сеты',
  'Вок и закуски',
  'Салаты',
  'Десерты',
  'Напитки',
  'Дополнительно'
]

const HeaderMenu:FC<any> = () => {
  const headerState = useContext(HeaderContext)

  return (
    <div
      style={{width: headerState?.isSearchOpen ? 0 : `calc(100% - ${headerState?.actionWidth}px`}}
      className={setClassNames([styles.wrapper])}>
      <Swiper
        freeMode
        modules={[FreeMode]}
        slidesPerView={'auto'}
        className={styles.slider}
        wrapperTag='ul'
        >
        {listMock.map((i,index) => (
          <SwiperSlide tag='li' className={styles.slide} key={index}>
            {/* <Link className={styles.item} href={'/'}>{i}</Link> */}
            <Button buttonSize='lg' onClick={() => Router.push('/')} className={styles.item} variant={'simple'}>{i}</Button>
          </SwiperSlide> 
        ))}
        
      </Swiper>
    </div>
  )
}

export default HeaderMenu;