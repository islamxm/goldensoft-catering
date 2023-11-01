import styles from './styles.module.scss';
import { ChangeEvent, FC, useEffect, useState } from 'react'
import IconButton from '@/components/shared/iconButton/IconButton';
import { useContext } from 'react';
import { HeaderContext } from '../../utils/HeaderContext';
import { BiSearch } from 'react-icons/bi';
import Button from '@/components/shared/button/Button';
import { IoClose } from 'react-icons/io5';

const HeaderSearch: FC<any> = () => {
  const headerState = useContext(HeaderContext)
  const [value, setValue] = useState('')

  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <input
          placeholder='Поиск...'
          type="text"
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
      </div>
      <div className={styles.action}>

        <IconButton
          onClick={() => setValue('')}
        >
          <IoClose />
        </IconButton>


        <Button
          variant='danger'
          isRound
          onClick={() => headerState?.searchClose()}
        >
          Найти
        </Button>

      </div>
    </div>
  )
}

export default HeaderSearch;