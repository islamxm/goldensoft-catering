import Image from 'next/image';
import styles from './styles.module.scss';
import { FC, useState } from 'react'
import setClassNames from '@/utils/setClassNames';
import placeholder from '@/assets/img/product-placeholder.png'
import { PulseLoader } from 'react-spinners';
import PropsType from './types';

const ProductImage:FC<PropsType> = ({
  size = '100%',
  data
}) => {
  const {
    src,
    alt
  } = data || {}
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={styles.wrapper} style={{width: size}}>
      {!loaded && (
        <div className={styles.loading}>
          <PulseLoader color='var(--accent)'/>
        </div>
      )}
      <div className={setClassNames([styles.image, loaded && styles.loaded])}>
        <Image
          src={src || placeholder}
          alt={alt || 'image'}
          onLoadingComplete={() => setLoaded(true)}
          className={setClassNames([!src && styles.empty])}
          />
      </div>
    </div>
  )
}

export default ProductImage;