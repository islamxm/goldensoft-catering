import { FC } from 'react'
import styles from './styles.module.scss';
import {motion} from 'framer-motion';
import useAnimated from '@/components/shared/animated/hooks/useAnimated';
import Section from '@/components/shared/section/Section';
import List from '@/components/widgets/list/List';
import PromoCard from '@/components/widgets/promoCard/PromoCard';

const list = new Array(10).fill({})

const PromosPageComponent:FC<any> = () => {
  const {animateOptions} = useAnimated()

  return (
    <motion.div
      {...animateOptions}
      className={styles.wrapper}
      >
      <Section  
        titleValue={'Акции'}
        >
        <List
          list={list}
          onRenderItem={(props) => <PromoCard {...props}/>}
          gap={20}
          countItemsInRow={3}
          />
      </Section>
    </motion.div>    
  )
}

export default PromosPageComponent;