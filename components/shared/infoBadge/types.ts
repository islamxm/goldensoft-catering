import { SystemProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type PropsType = {
  mainLabel: ReactNode,
  exLabel?: string,
  align?: SystemProps["alignItems"],
}

export default PropsType;