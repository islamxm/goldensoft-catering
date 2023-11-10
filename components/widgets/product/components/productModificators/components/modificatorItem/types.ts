import { ModificatorItem } from "../../types";

type PropsType = ModificatorItem & {
  onChange?: (...args:any[]) => any
} 

export default PropsType;