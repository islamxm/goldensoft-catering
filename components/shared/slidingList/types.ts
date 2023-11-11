import { ReactNode } from "react";
import { SwiperProps } from "swiper/react";

type PropsType = {
  onRenderItem: (...args:any[]) => ReactNode,
  swiperProps?: SwiperProps,
  list?: any[]
}

export default PropsType;