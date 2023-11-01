import { ChangeEvent, HTMLInputTypeAttribute, HTMLProps, ReactNode } from "react";

type PropsType = {
  id: string
  label?: ReactNode,
  checked?: boolean,
  onChange?: (e: boolean) => void
  wrapperProps?: HTMLProps<HTMLDivElement>,
  type?: HTMLInputTypeAttribute,
  name?: string
}

export default PropsType;