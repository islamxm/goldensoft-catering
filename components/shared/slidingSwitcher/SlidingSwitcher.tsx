import { FC, useRef } from 'react'
import styles from './styles.module.scss';
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import PropsType from './types';
import useSlidingSwitcherHook from './utils/useSlidingSwitcherHook';
import SlideTab from './components/slideTab/SlideTab';

const SlidingSwitcher:FC<PropsType> = ({
  list,
  onChange,
  defaultActiveItem
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<SwiperRef | null>(null)

  const {
    activeItem,
    tabMinWidth,
    setActiveItem,
    setTabMinWidth,
  } = useSlidingSwitcherHook(
    swiperRef, 
    defaultActiveItem
  )

  return (
    <div className={styles.wrapper}>
      <div ref={trackRef} className={styles.track}>
        <Swiper
          ref={swiperRef}
          className={styles.slider}
          modules={[FreeMode]}
          slidesPerView={'auto'}
          spaceBetween={5}
          freeMode
          onInit={() => {
            if(trackRef?.current) {
              setTabMinWidth(trackRef?.current?.offsetWidth / 2)
            }
          }}
          >
          {
            list.map((i,index) => (
              <SwiperSlide
                key={index}
                className={styles.slide}
                style={{minWidth: tabMinWidth, width: 'auto'}}
                >
                <SlideTab
                  onChange={(...args) => {
                    onChange && onChange(...args)
                    setActiveItem(args[0])
                  }}
                  index={index}
                  tabId={i.tabId}
                  tabLabel={i.tabLabel}
                  isActive={index === activeItem}
                  />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  )
}

export default SlidingSwitcher;