import styles from './styles.module.scss';
import { FC } from 'react'
import PropsType from './types';
import Container from '@/components/shared/container/Container';
import useHeaderState from './utils/useHeaderState';
import setClassNames from '@/utils/setClassNames';
import HeaderMenu from './components/headerMenu/HeaderMenu';
import HeaderSearch from './components/headerSearch/HeaderSearch';
import { HeaderContext } from './utils/HeaderContext';
import HeaderAction from './components/headerAction/HeaderAction';
import HeaderTop from './components/headerTop/HeaderTop';
import useAnimated from '@/components/shared/animated/hooks/useAnimated';
import {motion} from 'framer-motion';

const Header:FC<PropsType> = () => {
  const {animateOptions} = useAnimated()
  const headerState = useHeaderState()

  return (
    <HeaderContext.Provider value={headerState}>
    <motion.header 
      {...{...animateOptions, initial: animateOptions ? {opacity: 0, scale: 1} : undefined}} 
      className={setClassNames([
      styles.wrapper,
      headerState.isScrolled && styles.scrolled
    ])}
      onMouseEnter={headerState.onHover}
      onMouseLeave={headerState.onLeave}
      >
      <HeaderTop/>
      <div className={styles.bottom}>
        <Container>
          <div className={styles.bottom_in}>
          <HeaderMenu/>
              {headerState?.isSearchOpen && <HeaderSearch/>}
            <HeaderAction/>
          </div>
        </Container>
      </div>
    </motion.header>
    </HeaderContext.Provider>
  )
}

export default Header;