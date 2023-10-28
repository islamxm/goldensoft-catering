import { HTMLProps, PropsWithChildren } from "react";

type TitleVariant = 'primary' | 'secondary' | 'danger'
type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'



type PropsType = HTMLProps<HTMLHeadingElement> & PropsWithChildren & {
  variant?: TitleVariant,
  tag?: TitleTag
}

export default PropsType;