import { ReactComponentElement, ReactNode } from "react";

type PropsType = {
  onRenderItem: (...args:any[]) => ReactNode
  list?: any[],
  className?: string,
  gap?: number,
  countItemsInRow?: number
}

export default PropsType;