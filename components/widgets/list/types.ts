import { ReactComponentElement, ReactNode } from "react";

type PropsType = {
  onRenderItem: (...args:any[]) => ReactNode
  list?: any[],
}

export default PropsType;