import { FC } from 'react'
import styles from './styles.module.scss';
import ProductMain from './components/productMain/ProductMain';
import ProductAction from './components/productAction/ProductAction';
2

const Product:FC<any> = () => {
  return (
    <div className={styles.wrapper}>
      <ProductMain/>
      <ProductAction/>
    </div>
  )
}

export default Product;