import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react'
import Header from '@/components/widgets/header/Header';
import Footer from '@/components/widgets/footer/Footer';

import BasketDrawer from '@/components/widgets/basket/BasketDrawer';

const PageLayout:FC<PropsWithChildren> = ({children}) => {

  return (
    <div className={styles.wrapper}>
    <Header/>
    <main className={styles.main}>
      {children}
    </main>     
    <Footer/> 


    {/* GLOBAL COMPONENTS */}
    <BasketDrawer/>
  </div>
    
  )
}

export default PageLayout;