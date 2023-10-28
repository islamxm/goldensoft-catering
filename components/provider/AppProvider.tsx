import { FC, PropsWithChildren, useEffect } from 'react'
import setGlobalStyleVariables from '@/utils/setGlobalStyleVariables';
import globalStyleVars from '@/data/styleVars';
import PageLayout from '@/components/layouts/pageLayout/PageLayout';
import 'swiper/css';
import 'swiper/css/effect-fade';
setGlobalStyleVariables(globalStyleVars)

const AppProvider:FC<PropsWithChildren> = ({children}) => {
  

  return (
    <PageLayout>
      {children}
    </PageLayout>
  )
}

export default AppProvider;