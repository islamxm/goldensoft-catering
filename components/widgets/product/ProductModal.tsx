import Modal from '@/components/shared/modal/Modal';
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
      contentWidth={885}
      >
      <Product/>
    </Modal>
  )
}

export default ProductModal;