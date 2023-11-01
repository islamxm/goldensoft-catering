import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react'
import { useState } from 'react'
import Basket from './Basket'
import IconButton from '@/components/shared/iconButton/IconButton'
import {IoClose} from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { main_toggleBasketDrawer } from '@/store/slices/main/mainSlice';

const BasketDrawer = () => {
  const dispatch = useAppDispatch()
  const {isBasketOpen} = useAppSelector(s => s.main)

  return (
    <Drawer
        isOpen={isBasketOpen}
        placement='right'
        onClose={() => dispatch(main_toggleBasketDrawer())}
      >
      <DrawerOverlay style={{backdropFilter: 'blur(3px)'}}/>
      <DrawerContent maxW={520}>
        <IconButton 
          onClick={() => dispatch(main_toggleBasketDrawer())}
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