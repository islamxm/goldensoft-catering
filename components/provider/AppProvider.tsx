import { FC, PropsWithChildren, useEffect } from 'react'
import setGlobalStyleVariables from '@/utils/setGlobalStyleVariables';
import globalStyleVars from '@/data/styleVars';
import PageLayout from '@/components/layouts/pageLayout/PageLayout';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import store from '@/store/store';
setGlobalStyleVariables(globalStyleVars)

const AppProvider:FC<PropsWithChildren> = ({children}) => {
  

  return (
    <Provider store={store}>
      <ChakraProvider>
        <PageLayout>
          {children}
        </PageLayout>
      </ChakraProvider>
    </Provider>
    
    
  )
}

export default AppProvider;