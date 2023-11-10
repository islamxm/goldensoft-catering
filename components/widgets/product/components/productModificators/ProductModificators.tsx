import styles from './styles.module.scss';
import { FC, useRef } from 'react'
import PropsType from './types';
import Title from '@/components/shared/title/Title';
import { Stack } from '@chakra-ui/react';
import useCollapsable from '@/hooks/useCollapsable';
import ModificatorItem from './components/modificatorItem/ModificatorItem';
import Button from '@/components/shared/button/Button';

const ProductModificators:FC<PropsType> = ({
  title,
  list = []
}) => {
  const {
    ref,
    isOpen,
    style,
    onToggle
  } = useCollapsable()

  return (
    <div className={styles.wrapper}>
      <Stack spacing={'12px'}>
        {title && <Title tag='h5'></Title>}
        <Stack spacing={'5px'}>
          {
            list.length > 0 && list.map((i, index) => {
              if(index <= 1) {
                return (
                  <ModificatorItem
                  key={index}
                  {...i}
                  />
                )
              }
            })
          }
          {
            list?.length > 2 && (
              <>
                <div ref={ref} className={styles.collapsable} style={{...style}}>
                  <Stack spacing={'5px'}>
                    {
                      list.map((i, index) => {
                        if(index > 1) {
                          return (
                            <ModificatorItem
                            key={index}
                            {...i}
                            />
                          )
                        }
                      })
                    }
                  </Stack>
                </div>
                <div className={styles.action}>
                  <Button onClick={onToggle} variant={'simple_danger'}>
                    {!isOpen ? 'Смотреть все' : 'Cкрыть'}
                  </Button>
                </div>
              </>
            )
          }
        </Stack>
        
      </Stack>
    </div>
  )
}

export default ProductModificators;