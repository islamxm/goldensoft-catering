import { ButtonVariant } from '@/components/shared/button/type';
import {type UseModalProps} from '@chakra-ui/react';
import { ReactNode } from 'react';

type ActionType = {
  onClick?: (...args:any[]) => any,
  isLoading?: boolean,
  buttonContent?: ReactNode,
  buttonVariant?: ButtonVariant
}

type PropsType = UseModalProps & {
  data?: {
    title?: string,
    content?: ReactNode,
    action?: {
      accept?: ActionType,
      reject?: ActionType
    }
  }
}

export default PropsType;