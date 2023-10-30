import { StaticImageData, StaticImport } from "next/dist/shared/lib/get-img-props";

type PropsType = {
  list?: (Record<string, any> & {image: string | StaticImport | StaticImageData})[]
}

export default PropsType;