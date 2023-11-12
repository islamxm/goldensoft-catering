import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react'
import Header from '@/components/widgets/header/Header';
import Footer from '@/components/widgets/footer/Footer';
import BasketDrawer from '@/components/widgets/basket/BasketDrawer';
import Animated from '@/components/shared/animated/Animated';
import GoToTop from '@/components/widgets/goToTop/GoToTop';
import ProductModal from '@/components/widgets/product/ProductModal';

const PageLayout:FC<PropsWithChildren> = ({children}) => {

  return (
    <div className={styles.wrapper}>
    <Animated><Header/></Animated>
    <main className={styles.main}>
      {children}
    </main>     
    <Animated><Footer/></Animated> 
    

    {/* GLOBAL COMPONENTS */}
    <GoToTop/>

    {/* MODALS & DRAWERS*/}
    <BasketDrawer/>
    <ProductModal/>
  </div>
    
  )
}

export default PageLayout;