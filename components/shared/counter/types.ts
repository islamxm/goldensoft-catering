import { HTMLProps } from "react";

type PropsType = {
  defaultValue?: number,
  onChange?: CounterValueChange,
  interval?: [number,number],
  fieldProps?: HTMLProps<HTMLInputElement> & {

  },
  wrapperProps?: HTMLProps<HTMLDivElement>
  isFill?: boolean
}

type CounterValueChange = (value: number) => void

export default PropsType;