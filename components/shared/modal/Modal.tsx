import {
  Modal as Modall,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { FC } from 'react';
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const Modal:FC<PropsType> = (props) => {
  const {
    children,
    contentWidth,
    contentClassName,
    isOpen = false,
    onClose = () => {},
    ...restProps
  } = props
  return (
    <Modall
      isOpen={isOpen}
      onClose={onClose}
      {...restProps}
      >
      <ModalOverlay
        style={{backdropFilter: 'blur(3px)'}}
        >
        <ModalContent
          w={contentWidth}
          maxW={contentWidth}
          className={setClassNames(['modal', contentClassName])}
          >
          {children}
        </ModalContent>
      </ModalOverlay>
    </Modall>
  )
}

export default Modal;