import styles from './styles.module.scss';
import { FC } from 'react'
import { type ModificatorItem } from '../../types';
import Counter from '@/components/shared/counter/Counter';
import Checkbox from '@/components/shared/checkbox/Checkbox';
import PropsType from './types';
import Text from '@/components/shared/text/Text';

const ModificatorItem:FC<PropsType> = ({
  id,
  label,
  price,
  isCountable,
}) => {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.label}>{label}</div>
        {price && <div className={styles.price}>
          <Text variant={'secondary'}>
            {price}  
          </Text>  
        </div>}
      </div>
      <div className={styles.action}>
        {
          isCountable ? (
            <Counter interval={[0,10]}/>
          ) : (
            <Checkbox id={id.toString()}/>
          )
        }
      </div>
    </div>
  )
}

export default ModificatorItem;