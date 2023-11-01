import styles from './styles.module.scss';
import { FC, useState } from 'react'
import navigationMenuList from '@/data/navigationMenuList';
import Button from '@/components/shared/button/Button';
import {FiMapPin} from 'react-icons/fi';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import MainLocationModal from '@/components/modals/mainLocationModal/MainLocationModal';

const HeaderNav:FC<any> = () => {
  const [modal, setModal] = useState(false)

  return (
    
    <div className={styles.wrapper}>
      <MainLocationModal
        isOpen={modal}
        onClose={() => setModal(false)}
        />
      <div className={styles.location}>
        <Button
          onClick={() => setModal(true)}
          startContent={<FiMapPin />}
          variant={'secondary_outlined'}
          className={styles.item}
          >
          Краснодар
        </Button>
      </div>
      
      <Swiper  
        modules={[FreeMode]}
        slidesPerView={'auto'}
        freeMode
        wrapperTag='ul'
        className={styles.slider}>
        {
          navigationMenuList.map((i,index) => (
            <SwiperSlide className={styles.slide} tag='li' key={index}>
              <Button className={styles.item} variant={'secondary_outlined'}>{i.label}</Button>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
    
  )
}

export default HeaderNav;