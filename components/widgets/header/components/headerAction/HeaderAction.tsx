import styles from './styles.module.scss';
import { FC, useEffect, useRef } from 'react'
import { useContext } from 'react';
import { HeaderContext } from '../../utils/HeaderContext';
import IconButton from '@/components/shared/iconButton/IconButton';
import { BiSearch } from 'react-icons/bi';
import {BsBagCheck} from 'react-icons/bs';
import { Stack } from '@chakra-ui/react';
import {MdFlashOn} from 'react-icons/md';
import {FiUser} from 'react-icons/fi';
import { main_toggleBasketDrawer } from '@/store/slices/main/mainSlice';
import { useAppDispatch } from '@/hooks/useStore';

const HeaderAction:FC<any> = () => {
  const dispatch = useAppDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const headerState = useContext(HeaderContext)


  useEffect(() => {
    if(ref?.current && headerState) {
      headerState?.setActionWidth(ref?.current?.scrollWidth)
    }
  }, [ref, headerState])


  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.item}>
        <IconButton
          style={{color: headerState?.isSearchOpen ? 'var(--accent)' : ''}}
          onClick={() => headerState?.searchToggle()}
          >
          <BiSearch/>
        </IconButton>
      </div>
      <div className={styles.item}> 
        <Stack spacing={'8px'} align={'center'}>
          <IconButton
            badge={3}
            onClick={() => dispatch(main_toggleBasketDrawer())}
            >
            <BsBagCheck/>
          </IconButton>
          <div className={styles.label}>
            1 089₽
          </div>
        </Stack>
      </div>
      <div className={styles.item}>
      <Stack spacing={'8px'} align={'center'}>
          <IconButton
            badge={3}
            >
            <FiUser/>
          </IconButton>
          <div className={styles.label}>
            174 <MdFlashOn size={16} color='var(--accent_2)'/>
          </div>
        </Stack>
      </div>
    </div>
  )
}

export default HeaderAction;