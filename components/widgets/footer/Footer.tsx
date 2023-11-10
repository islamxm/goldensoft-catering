import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import Container from '@/components/shared/container/Container';
import FooterNavigation from './components/footerNavigation/FooterNavigation';
import InfoBadge from '@/components/shared/infoBadge/InfoBadge';
import { Stack } from '@chakra-ui/react';

const Footer:FC<PropsType> = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.top}>
        <Container>
          <div className={styles.top_in}>
            <div className={styles.part}>
              <FooterNavigation/>
            </div>
            <div className={styles.part}>
              <Stack spacing={[10,10]}>
                {/* info badges */}
              </Stack>
            </div>
            <div className={styles.part}>
              {/* logo */}
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <Container>
          <div className={styles.bottom_in}>
            @Copyright 2023
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer;