import PropsType from '@/components/shared/modal/types';

//Не совсем подходящее название
type ModalWithData<T = undefined> = PropsType & {
  data?: T
}

export default ModalWithData;