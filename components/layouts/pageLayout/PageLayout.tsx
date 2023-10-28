import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react'
import Header from '@/components/widgets/header/Header';
import Footer from '@/components/widgets/footer/Footer';

const PageLayout:FC<PropsWithChildren> = ({children}) => {
  
  return (
    <>
      <Header/>
      <main className={styles.main}>
        {children}
      </main>     
      <Footer/> 
    </>
  )
}

export default PageLayout;