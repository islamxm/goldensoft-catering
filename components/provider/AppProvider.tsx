import { FC, PropsWithChildren } from 'react'
import setGlobalStyleVariables from '@/utils/setGlobalStyleVariables';
import globalStyleVars from '@/data/styleVars';
import PageLayout from '@/components/layouts/pageLayout/PageLayout';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChakraProvider } from '@chakra-ui/react';
import useSetFromModalUrl from '@/hooks/useSetModalFromUrl';

setGlobalStyleVariables(globalStyleVars)

const AppProvider:FC<PropsWithChildren> = ({children}) => {
  useSetFromModalUrl()

  return (
    <ChakraProvider>
      <PageLayout>
        {children}
      </PageLayout>
    </ChakraProvider>
  )
}

export default AppProvider;