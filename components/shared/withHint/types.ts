import { PopoverProps } from "@chakra-ui/react";
import { PropsWithChildren, ReactNode } from "react";

type PropsType = PropsWithChildren & {
  options?: PopoverProps,
  isShowHintIcon?: boolean,
  content?: ReactNode
}

export default PropsType;