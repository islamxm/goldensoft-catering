type PriceType = {
  isFrom?: boolean,
  old?: string,
  actual?:string,
  perType?: {
    value: string | number,
    unit: string
  }
}

export default PriceType;