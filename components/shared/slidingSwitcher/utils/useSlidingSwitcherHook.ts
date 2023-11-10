import { useState, useEffect, MutableRefObject } from "react";
import { SlideTabItem } from "../types";
import { TabItem } from "../../tabs/types";
import { SwiperRef } from "swiper/react";

const useSlidingSwitcherHook = (
  swiperRef: MutableRefObject<SwiperRef | null>,
  defaultActiveItem?: SlideTabItem
) => {

  const [tabMinWidth, setTabMinWidth] = useState(0)
  const [activeItem, setActiveItem] = useState<number>()

  useEffect(() => {
    if (swiperRef?.current && typeof activeItem === 'number') {
      swiperRef.current?.swiper.slideTo(activeItem)
    }
  }, [activeItem, swiperRef])


  useEffect(() => {
    if(defaultActiveItem) {
      setActiveItem(defaultActiveItem.index)
    }
  }, [defaultActiveItem])

  return {
    tabMinWidth,
    activeItem,

    setTabMinWidth,
    setActiveItem
  }
}

export default useSlidingSwitcherHook;