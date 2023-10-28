import {HTMLProps} from 'react'
import PriceType from "@/models/PriceType";

type PropsType = HTMLProps<HTMLDivElement> & {
    pricaData?: PriceType,
}
export default PropsType;