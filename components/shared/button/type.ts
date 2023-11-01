import { PropsWithChildren, ReactNode } from "react";
import GlobalSize from "@/models/GlobalSize";

export type ButtonVariant = 'simple' | 'simple_danger' | 'primary' | 'primary_outlined' | 'danger' | 'danger_outlined' | 'secondary_outlined';

export type ButtonNativeType = "button" | "submit" | "reset" | undefined


export type ButtonType = React.HTMLProps<HTMLButtonElement> & {
  variant?: ButtonVariant,
  type?: ButtonNativeType,
  buttonSize?: GlobalSize,
  isRound?: boolean,
  endContent?: ReactNode,
  startContent?: ReactNode,
  isLoading?: boolean,
  isFill?: boolean
}

type PropsType = PropsWithChildren & ButtonType;

export default PropsType;