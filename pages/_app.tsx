import type { AppProps } from 'next/app'
import '../styles/styles.scss';
import AppProvider from '@/components/provider/AppProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps}/>
    </AppProvider>
  )
}
