import { HTMLProps, PropsWithChildren, ReactElement} from "react";

type PropsType = HTMLProps<HTMLDivElement> & PropsWithChildren & {
  titleValue?: ReactElement | string,
  noPadding?: boolean,
  noContainer?: boolean
}

export default PropsType