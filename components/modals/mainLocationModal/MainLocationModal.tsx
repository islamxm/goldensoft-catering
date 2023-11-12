import styles from './styles.module.scss';
import { FC, useState } from 'react'
import Title from '@/components/shared/title/Title';
import { Stack } from '@chakra-ui/react';
import Checkbox from '@/components/shared/checkbox/Checkbox';
import Button from '@/components/shared/button/Button';
import Modal from '@/components/shared/modal/Modal';
import ModalWithData from '@/models/ModalWithData';
import setClassNames from '@/utils/setClassNames';

const list = [
  { id: '1', label: 'Тюмень' },
  { id: '2', label: 'Когалым' },
  { id: '3', label: 'Нефтеюганск' },
  { id: '4', label: 'Сургут' },
]

const MainLocationModal: FC<ModalWithData> = (props) => {
  const {
    data,
    ...restProps
  } = props
  const [selected, setSelected] = useState<any>(undefined)

  return (
    <Modal
      {...restProps}
      contentWidth={415}
      contentClassName={setClassNames([styles.wrapper, restProps?.contentClassName])}
    >
      <Stack spacing={'35px'}>
        <Title style={{ textAlign: 'center' }} tag='h3'>Ваш город</Title>
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
    </Modal>
  )
}

export default MainLocationModal;