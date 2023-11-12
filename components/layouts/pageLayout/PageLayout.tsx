import styles from './styles.module.scss';
import { FC, PropsWithChildren } from 'react'
import Header from '@/components/widgets/header/Header';
import Footer from '@/components/widgets/footer/Footer';

import BasketDrawer from '@/components/widgets/basket/BasketDrawer';
import Animated from '@/components/shared/animated/Animated';
import GoToTop from '@/components/widgets/goToTop/GoToTop';
import ProductModal from '@/components/widgets/product/ProductModal';
import PromptModal from '@/components/modals/promptModal/PromptModal';
import Text from '@/components/shared/text/Text';

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
    <PromptModal 
      isOpen 
      onClose={() => {}}
      data={{
        title: 'Удалить профиль?',
        content: <Text style={{textAlign: 'center'}} variant='secondary'>
          С удалением профиля Вы потеряете бонусные баллы, сохраненные адреса, историю заказов.
        </Text>,
        action: {
          reject: {
            buttonContent: 'Отмена',
            
          },
          accept: {
            buttonContent: 'Все равно удалить',
            isLoading: true
          }
        }
      }}
      />
  </div>
    
  )
}

export default PageLayout;