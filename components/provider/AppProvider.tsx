import { FC, PropsWithChildren, useEffect } from 'react'
import setGlobalStyleVariables from '@/utils/setGlobalStyleVariables';
import globalStyleVars from '@/data/styleVars';
import PageLayout from '@/components/layouts/pageLayout/PageLayout';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ChakraProvider } from '@chakra-ui/react';
import useSetFromModalUrl from '@/hooks/useSetModalFromUrl';
import AppPreloader from '../widgets/appPreloader/AppPreloader';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { main_setFetchPreDataStatus } from '@/store/slices/main/mainSlice';
import Animated from '../shared/animated/Animated';


setGlobalStyleVariables(globalStyleVars)

const AppProvider:FC<PropsWithChildren> = ({children}) => {
  useSetFromModalUrl()
  const {fetchPreDataStatus} = useAppSelector(s => s.main)
  const dispatch = useAppDispatch()

  useEffect(() => {
    //imitate pre data fetch
    let tm = setTimeout(() => {
      dispatch(main_setFetchPreDataStatus('SUCCESS'))
    }, 5000)
    return () => clearTimeout(tm)
  }, [dispatch])


  if(fetchPreDataStatus === 'SUCCESS') {
    return (
    
      <ChakraProvider>
        <PageLayout>
          {children}
        </PageLayout>
      </ChakraProvider>
    )
  }
  if(fetchPreDataStatus === 'LOADING') {
    return (
      <Animated><AppPreloader/></Animated>
    )
  }
}

export default AppProvider;