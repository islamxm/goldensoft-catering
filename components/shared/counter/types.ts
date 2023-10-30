import { HTMLProps } from "react";

type PropsType = HTMLProps<HTMLDivElement> & {
  defaultValue?: number,
  onChange?: CounterValueChange,
  interval?: [number,number],
  fieldProps?: HTMLProps<HTMLInputElement> & {

  },
  isFill?: boolean
}

type CounterValueChange = (value: number) => void

export default PropsType;