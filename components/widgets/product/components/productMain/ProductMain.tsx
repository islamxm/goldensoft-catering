import { FC } from 'react'
import styles from './styles.module.scss';
import setClassNames from '@/utils/setClassNames';
import ProductContent from '../productContent/ProductContent';
import placeholder from '@/assets/img/product-placeholder.png';
import Image from 'next/image';
import ProductImage from '@/components/shared/productImage/ProductImage';

const ProductMain:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={setClassNames([styles.part, styles.image])}>
        <ProductImage/>  
      </div>
      <div className={setClassNames([styles.part, styles.content])}>
        <ProductContent/>
      </div>
    </div>
  )
}

export default ProductMain;