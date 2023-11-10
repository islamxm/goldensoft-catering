import useGetSearchParams from "./useGetSearchParams";
import { useAppDispatch } from "./useStore";
import ModalList from "@/data/modalList";
import queryParams from "@/data/queryParams";

import { 
  open_basketModal,
  open_productModal,
} from "@/store/slices/modal/modalSlice";
import { useEffect } from "react";

const useSetFromModalUrl = () => {
  const dispatch = useAppDispatch()
  const {modalList} = useGetSearchParams([queryParams.modalList])

  const switchModals = () => {
    if(typeof modalList === 'string') {
      const list = modalList.split(',')
      list.forEach(param => {
        switch(param) {
          case ModalList.basketDrawer:
            dispatch(open_basketModal())
            break;
          case ModalList.productModal:
            dispatch(open_productModal())
        }
      })
    }
  }
  
  useEffect(() => {
    switchModals()
  }, [modalList])
}

export default useSetFromModalUrl;