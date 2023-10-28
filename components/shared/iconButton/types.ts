import { PropsWithChildren, ReactNode } from "react";
import GlobalSize from "@/models/GlobalSize";
import { ButtonVariant } from "../button/type";
import { ButtonNativeType } from "../button/type";

export type IconButtonType = React.HTMLProps<HTMLButtonElement> & {
  variant?: ButtonVariant,
  type?: ButtonNativeType,
  buttonSize?: GlobalSize,
  isRound?: boolean,
  isLoading?: boolean
}

type PropsType = PropsWithChildren & IconButtonType;

export default PropsType;