import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import Basket from './Basket'
import IconButton from '@/components/shared/iconButton/IconButton'
import {IoClose} from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { close_basketModal, open_basketModal } from '@/store/slices/modal/modalSlice';

const BasketDrawer = () => {
  const dispatch = useAppDispatch()
  const {basketDrawer} = useAppSelector(s => s.modal)

  return (
    <Drawer
        isOpen={basketDrawer}
        placement='right'
        onClose={() => dispatch(close_basketModal())}
      >
      <DrawerOverlay style={{backdropFilter: 'blur(3px)'}}/>
      <DrawerContent maxW={520}>
        <IconButton 
          onClick={() => dispatch(open_basketModal())}
          style={{
            position: 'absolute',
            left: -50,
            top: 10,
            color: '#fff'
          }}
          buttonSize='lg'>
          <IoClose/>
        </IconButton>
        <DrawerBody p={0}>
          <Basket/>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default BasketDrawer;