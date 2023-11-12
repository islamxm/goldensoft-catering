import styles from './styles.module.scss';
import { FC } from 'react'
import {
  Stack,
  Flex,
} from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import Button from '@/components/shared/button/Button';
import PropsType from './types';
import Modal from '@/components/shared/modal/Modal';
import ModalWithData from '@/models/ModalWithData';

const PromptModal: FC<ModalWithData<PropsType>> = (props) => {
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
      contentClassName={styles.wrapper}
      contentWidth={590}
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
    </Modal>
  )
}

export default PromptModal;