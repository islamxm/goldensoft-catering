import { HTMLProps, PropsWithChildren } from 'react'
type TextVariant = 'primary' | 'secondary'

type PropsType = HTMLProps<HTMLParagraphElement> & PropsWithChildren & {
    variant?: TextVariant,
} 

export default PropsType;