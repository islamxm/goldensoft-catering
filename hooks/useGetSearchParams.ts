import { useRouter } from "next/router";
import UrlQueryType from "@/models/UrlQueryType";

const useGetSearchParams = <T extends string>(value: T[]) => {
  const {query} = useRouter()

  const getParams = () => {
    let obj: Partial<Record<T, UrlQueryType>> = {}
    if(query && value?.length > 0) {
      value.forEach(key => {
        obj = {...obj, [key]: query[key]}
      })  
    } 
    return obj
  }
  
  return getParams()
}

export default useGetSearchParams;