import { HTMLProps, ReactNode } from "react";
import { MaskProps } from "@react-input/mask";

type MaskOptionsType = Pick<MaskProps, 'mask' | 'replacement' | 'showMask'>

type PropsType = HTMLProps<HTMLInputElement> & {
  maskOptions?: MaskOptionsType 
  startContent?: ReactNode,
  endContent?: ReactNode,
  error?: boolean | string
} 

export type UseInputArgs = HTMLProps<HTMLInputElement> & Pick<PropsType, 'maskOptions'>

export default PropsType;