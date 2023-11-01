import styles from './styles.module.scss';
import { FC } from 'react'
import { Stack } from '@chakra-ui/react';
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const InfoBadge:FC<PropsType> = ({
  mainLabel,
  exLabel,
  align = 'center'
}) => {
  return (
    <div className={setClassNames([
      styles.wrapper,
      align === 'flex-end' && styles.textRight,
      align === 'flex-start' && styles.textLeft,
      align === 'center' && styles.textCenter
    ])}>
      <Stack align={align} spacing={'12px'}>
        <div className={styles.main}>
          {mainLabel}
        </div>
        {exLabel && (
          <div className={styles.ex}>
            {exLabel}
          </div>
        )}
      </Stack>
    </div>
  )
}

export default InfoBadge;