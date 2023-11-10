import styles from './styles.module.scss';
import { FC } from 'react'
import { useSwiper } from 'swiper/react';
import { SlideTabItem } from '../../types';
import Button from '@/components/shared/button/Button';

const SlideTab:FC<SlideTabItem> = ({
  isActive,
  tabId,
  tabLabel,
  index,
  onChange,
  data
}) => {


  
  return (
    <Button 
      onClick={() => onChange && 
        onChange(index, {tabId, tabLabel}, data || {})
      }
      isFill
      variant={isActive ? 'danger' : 'simple'}>
      {tabLabel}
    </Button>
  )
}

export default SlideTab;