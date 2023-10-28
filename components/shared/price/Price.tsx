import { FC } from 'react'
import PropsType from './types';
import styles from './styles.module.scss';
import setClassNames from '@/utils/setClassNames';
import Title from '../title/Title';

const Price:FC<PropsType> = ({
  pricaData,
  ...restProps
}) => {
  const {
    isFrom,
    old,
    actual,
    perType
  } = pricaData || {}

  return (
    <div {...restProps} className={setClassNames([styles.wrapper, restProps?.className])}>
      {isFrom && 'от '}
      {actual && <Title tag='h4' element='span'>{`${actual} ₽`}</Title>}
      {old && <span className={styles.old}>{old} ₽</span>}
      {perType && <span className={styles.unit}>/{perType.value}{perType.unit}</span>}
    </div>
  )
}

export default Price;