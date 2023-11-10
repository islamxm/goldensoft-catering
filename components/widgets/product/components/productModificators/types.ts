import UniProps from "@/models/UniProps";

type PropsType = {
  title?: string,
  list?: ModificatorItem[]
}

export type ModificatorItem = UniProps<{
  label?: string,
  price?: number | string,
  isCountable?: boolean,
}>

export default PropsType;