import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import Container from '@/components/shared/container/Container';
import FooterNavigation from './components/footerNavigation/FooterNavigation';

const Footer:FC<PropsType> = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <Container>
          <div className={styles.top_in}>
            <div className={styles.part}>
              <FooterNavigation/>
            </div>
            <div className={styles.part}></div>
            <div className={styles.part}></div>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container>

        </Container>
      </div>
    </footer>
  )
}

export default Footer;