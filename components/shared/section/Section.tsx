import styles from './styles.module.scss';

import { FC } from 'react'
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';
import Title from '../title/Title';
import Container from '../container/Container';

const Section:FC<PropsType> = (props) => {
  const {
    children,
    titleValue,
    noPadding,
    noContainer,
    ...restProps
  } = props

  if(noContainer) {
    return (
    <section {...restProps} className={setClassNames([
        styles.wrapper,
        noPadding && styles.no_padding
      ])}>
      {titleValue && (
        <div className={styles.title}>
          {
            typeof titleValue === 'string' ? (
              <Title
                tag='h2'
                variant={'primary'}
                >
                {titleValue}
              </Title>
            ) : titleValue
          }
        </div>
      )}
      {children}
    </section>
    )
  }

  return (
    <section {...restProps} className={setClassNames([
      styles.wrapper,
      noPadding && styles.no_padding
      ])}>
        <Container>
        {titleValue && (
          <div className={styles.title}>
            {
              typeof titleValue === 'string' ? (
                <Title
                  tag={'h2'}
                  variant={'primary'}
                  >
                  {titleValue}
                </Title>
              ) : titleValue
            }
          </div>
        )}
        {children}
        </Container>
    </section>
  )
}

export default Section;