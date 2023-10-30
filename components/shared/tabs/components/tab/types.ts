import { TabItem } from "../../types";
import { TabsOnChange } from "../../types";

type PropsType = TabItem & {
  data: Record<string, any>,
  isActive?: boolean
  onChange?: TabsOnChange
}

export default PropsType;