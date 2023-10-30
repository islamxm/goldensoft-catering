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

const BasketDrawer = () => {
  const [test, setTest] = useState(true)

  return (
    <Drawer
        isOpen={test}
        placement='right'
        onClose={() => setTest(false)}
      >
      <DrawerOverlay style={{backdropFilter: 'blur(3px)'}}/>
      <DrawerContent maxW={520}>
        <IconButton 
          onClick={() => setTest(false)}
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