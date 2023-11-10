import {
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react'
import Product from './Product';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { close_productModal } from '@/store/slices/modal/modalSlice';

const ProductModal = () => {
  const dispatch = useAppDispatch()
  const {productModal} = useAppSelector(s => s.modal)

  return (
    <Modal
      isOpen={productModal}
      onClose={() => dispatch(close_productModal())}
      isCentered
      >
      <ModalOverlay/>
      <ModalContent style={{background: 'unset'}} maxW={885}>
        <Product/>
      </ModalContent>
    </Modal>
  )
}

export default ProductModal;