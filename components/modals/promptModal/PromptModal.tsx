import styles from './styles.module.scss';
import { FC } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  Flex,
} from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import setClassNames from '@/utils/setClassNames';
import Button from '@/components/shared/button/Button';
import PropsType from './types';

const PromptModal:FC<PropsType> = (props) => {
  const {
    data,
    ...restProps
  } = props

  const {
    title,
    content,
    action
  } = data || {}

  return (
    <Modal
      {...restProps}
      isCentered
      >
      <ModalOverlay
        style={{backdropFilter: 'blur(3px)'}}
        >
        <ModalContent
          w={590}
          className={setClassNames([
            styles.wrapper,
            'modal'
          ])}
          >
          <Stack
            spacing={'32px'}
            >
            {title && <Title className={styles.title} tag='h3'>{title}</Title>}
            {content && (
              <div className={styles.content}>
                {content}
              </div>
            )}
            {action && (
              <Flex gap={'12px'} className={styles.action}>
                {action?.accept && (
                  <Button 
                    isFill
                    onClick={action?.accept?.onClick}
                    isLoading={action?.accept?.isLoading}
                    variant={action?.accept?.buttonVariant || 'primary'}>{action?.accept?.buttonContent}</Button>
                )}
                {action?.reject && (
                  <Button 
                    isFill
                    onClick={action?.reject?.onClick}
                    isLoading={action?.reject?.isLoading}
                    variant={action?.reject?.buttonVariant || 'primary_outlined'}>{action.reject?.buttonContent}</Button>
                )}
              </Flex>
            )}
          </Stack>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default PromptModal;