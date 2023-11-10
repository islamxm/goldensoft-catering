import { PropsWithChildren, ReactNode } from "react";
import GlobalSize from "@/models/GlobalSize";
import { ButtonVariant } from "../button/type";
import { ButtonNativeType } from "../button/type";

export type IconButtonType = React.HTMLProps<HTMLButtonElement> & {
  variant?: ButtonVariant | 'secondary',
  type?: ButtonNativeType , 
  buttonSize?: GlobalSize | string | number,
  isRound?: boolean,
  isLoading?: boolean,
  badge?: ReactNode
}

type PropsType = PropsWithChildren & IconButtonType;

export default PropsType;