import { FC } from 'react'
import styles from './styles.module.scss';
import { Stack } from '@chakra-ui/react';
import Title from '@/components/shared/title/Title';
import Text from '@/components/shared/text/Text';
import SlidingSwitcher from '@/components/shared/slidingSwitcher/SlidingSwitcher';
import ProductDescr from '../productDescr/ProductDescr';
import ProductModificators from '../productModificators/ProductModificators';
import { ModificatorItem } from '../productModificators/types';
import ProductCalories from '../productCalories/ProductCalories';

const testList = [
  {tabId: 1, tabLabel: 'Маленькая 35 см', data: {}},
  {tabId: 2, tabLabel: 'Большая 40 см', data: {}},
  {tabId: 3, tabLabel: 'Очень большая 65 см 65 см', data: {}},
]

const testMods:ModificatorItem[] = [
  {id: 1, label: 'Сыр Моцарелла', price: '24₽'},
  {id: 2, label: 'Красный лук', price: '11₽'},
  {id: 3, label: 'Сыр Моцарелла', price: '24₽', isCountable: true},
]

const ProductContent:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <Stack>
        <Title
          tag='h2'
          >
          Пицца Жюльен
        </Title>
        <Text className={styles.description} variant={'secondary'}>
        Тонкое тесто, 630 г
        </Text>
        <SlidingSwitcher
          list={testList}
          defaultActiveItem={{...testList[0], index: 0}}
          />
        <ProductDescr
          title='Состав'>
          Сыр Моцарелла, базилик зелёный, соус томатный
        </ProductDescr>
        <ProductDescr
          title='Аллергены'>
          <ul>
            <li>Сухие водоросли нори</li>
          </ul>
        </ProductDescr>
        <ProductModificators
          title='Можно убрать'
          list={testMods}
          />
        <ProductCalories/>
      </Stack>
    </div>
  )
}

export default ProductContent;