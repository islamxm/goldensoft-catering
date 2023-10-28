import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import Container from '@/components/shared/container/Container';
import useHeaderState from './utils/useHeaderState';
import setClassNames from '@/utils/setClassNames';
import Image from 'next/image';
import logo from '@/assets/img/logo.svg';
import Button from '@/components/shared/button/Button';

const Header:FC<PropsType> = () => {
  const {isScrolled} = useHeaderState()

  return (
    <header className={setClassNames([
      styles.wrapper,
      isScrolled && styles.scrolled
    ])}>
      <div className={styles.top}>
        <Container>
          <div className={styles.top_in}>
            <div className={styles.top_main}>
              <div className={styles.logo}>
                <Image
                  src={logo}
                  alt='Logotype'
                  />  
              </div>
              <div className={styles.top_nav}>

              </div> 
            </div>
            <div className={styles.top_ex}>

            </div>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container>
          <div className={styles.bottom_in}>
            <div className={styles.nav}>
              <div className={styles.menu}></div>  
              <div className={styles.search}></div>
            </div>
            <div className={styles.action}>
              <div className={styles.action_item}></div>
              <div className={styles.action_item}></div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Header;