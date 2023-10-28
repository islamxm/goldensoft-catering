import { FC } from 'react'
import styles from './styles.module.scss';
import Section from '@/components/shared/section/Section';
import Title from '@/components/shared/title/Title';
import ProductCard from '@/components/widgets/productCard/ProductCard';
import List from '@/components/widgets/list/List';
import productList from '@/mocks/productList';


const HomePageComponent:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <Section noContainer noPadding>
        
      </Section>
      <Section
        titleValue='Роллы'
        >
        <List
            list={productList}
            onRenderItem={(props) => {
              return <ProductCard {...props}/>
            }}
            />
      </Section>
    </div>
  )
}

export default HomePageComponent;