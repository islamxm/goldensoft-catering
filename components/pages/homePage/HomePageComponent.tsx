import styles from './styles.module.scss';
import { FC } from 'react'
import Section from '@/components/shared/section/Section';
import ProductCard from '@/components/widgets/productCard/ProductCard';
import List from '@/components/shared/list/List';
import productList from '@/mocks/productList';
import HeroBanner from '@/components/widgets/heroBanner/HeroBanner';
import Tabs from '@/components/shared/tabs/Tabs';
import { Stack } from '@chakra-ui/react';
import { TabListItem } from '@/components/shared/tabs/types';
import {motion} from 'framer-motion';
import useAnimated from '@/components/shared/animated/hooks/useAnimated';
import CategoryCard from '@/components/widgets/categoryCard/CategoryCard';

const tabList:TabListItem[] = [
  {data: {}, tabId: 1, tabLabel: 'Все'},
  {data: {}, tabId: 2, tabLabel: 'Холодные'},
  {data: {}, tabId: 3, tabLabel: 'Запечённые'},
  {data: {}, tabId: 4, tabLabel: 'Горячие'},
  {data: {}, tabId: 5, tabLabel: 'Острые'},
]

const HomePageComponent:FC<any> = () => {
  const {animateOptions} = useAnimated()

  return (
    <motion.div 
      {...animateOptions}
      className={styles.wrapper}>
      <Section noContainer noPadding>
        <HeroBanner/>
      </Section>
      <Section
        titleValue='Роллы'
        >
        <Stack spacing={35}>
            <Tabs
                onChange={(id, item, data) => {
                  // console.log(item)
                }}
                list={tabList}
                defaultActiveItem={{tabId: 1, tabLabel: 'Все'}}
                />
            <List
                list={productList}
                onRenderItem={(props) => {
                  //ТЕСТОВАЯ ПРОВЕРКА
                  if(props?.id === 1) {
                    return <CategoryCard {...props}/>
                  } else {
                    return <ProductCard {...props}/>
                  }
                  
                }}
                />
        </Stack>
      </Section>
    </motion.div>
    
  )
}

export default HomePageComponent;