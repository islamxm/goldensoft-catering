import styles from './styles.module.scss';
import { FC, useState } from 'react'
import Title from '@/components/shared/title/Title';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  type UseModalProps
} from '@chakra-ui/react';
import setClassNames from '@/utils/setClassNames';
import Checkbox from '@/components/shared/checkbox/Checkbox';
import Button from '@/components/shared/button/Button';

const list = [
  {id: '1', label: 'Тюмень'},
  {id: '2', label: 'Когалым'},
  {id: '3', label: 'Нефтеюганск'},
  {id: '4', label: 'Сургут'},
]

const MainLocationModal:FC<UseModalProps> = (props) => {
  const [selected, setSelected] = useState<any>(undefined)

  return (
    <Modal
      {...props}
      isCentered
      >
      <ModalOverlay
        style={{backdropFilter: 'blur(3px)'}}
        >
        <ModalContent 
          w={415} 
          className={setClassNames([
            styles.wrapper, 
            'modal'
          ])}>
          <Stack spacing={'35px'}>
            <Title style={{textAlign: 'center'}} tag='h3'>Ваш город</Title>
            {
              <div className={styles.list}>
                <Stack spacing={'20px'}>
                {
                  list.map(i => (
                    <Checkbox
                      key={i.id}
                      id={i.id}
                      checked={i.id === selected}
                      onChange={(e) => e && setSelected(i.id)}
                      label={i.label}
                      name='main-location'
                      type='radio'
                      />
                  ))
                }
                </Stack>
              </div>
            }
            <Button disabled={!selected} buttonSize='lg' isFill>Выбрать</Button>
          </Stack>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default MainLocationModal;