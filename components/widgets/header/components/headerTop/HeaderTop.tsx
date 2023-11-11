import styles from './styles.module.scss';
import { FC, useContext } from 'react'
import Container from '@/components/shared/container/Container';
import Image from 'next/image';
import logo from '@/assets/img/logo.svg';
import setClassNames from '@/utils/setClassNames';
import { HeaderContext } from '../../utils/HeaderContext';
import HeaderNav from '../headerNav/HeaderNav';
import InfoBadge from '@/components/shared/infoBadge/InfoBadge';
import Link from 'next/link';


const HeaderTop:FC<any> = () => {
  const headerState = useContext(HeaderContext)

  return (
    <div className={setClassNames([styles.top, headerState?.isScrolled && styles.hide])}>
      <Container>
          <div className={styles.top_in}>
            <div className={styles.top_main}>
              <Link href={'/'} className={styles.logo}>
                <Image
                  src={logo}
                  alt='Logotype'
                  />
              </Link>
              <HeaderNav/>
            </div>
            <div className={styles.top_ex}>
              <InfoBadge
                mainLabel={<a href={'tel:89990009999'}>8 (999) 000-99-99</a>}
                exLabel='Прием заказов с 9:00 до 23:00'
                align={'flex-end'}
                />
            </div>
          </div>
        </Container>
    </div>
  )
}

export default HeaderTop;