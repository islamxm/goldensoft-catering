import type { AppProps } from 'next/app'
import '../styles/styles.scss';
import AppProvider from '@/components/provider/AppProvider';
import { Provider } from 'react-redux';
import store from '@/store/store';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
    <AppProvider>
      <Component {...pageProps}/>
    </AppProvider>
    </Provider>
  )
}
