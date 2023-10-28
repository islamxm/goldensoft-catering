import UniProps from "./UniProps"
import PriceType from "./PriceType"

export type ProductType = UniProps<{
  prevImage?: any
  images?: any[],
  title?:string,
  compositionList?: any[],
  prices?: PriceType,
  variantsList?: any[],
  description?: string,
  allergensList?: any[],
  similarProductsList?: any[]
}>

export type ProductCompactType = Pick<ProductType, 'id' | 'title' | 'description' | 'prevImage' | 'prices'>;

export type ProductSuperCompactType = Pick<ProductCompactType, 'id' | 'title' | 'prices'>


