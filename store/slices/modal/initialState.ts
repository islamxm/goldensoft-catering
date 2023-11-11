import ModalList from "@/data/modalList";

const initialState:Record<keyof typeof ModalList, boolean> = {
  basketDrawer: true,
  productModal: false,
  mainLocationModal: false,
  loginModal: false,
  adressesModal: false,
  downloadAppModal: false,
  orderModal: false,
  orderAcceptModal: false,
  paymentErrorModal: false,
  orderStatusModal: false,
  deleteProfileModal: false
}

export default initialState;