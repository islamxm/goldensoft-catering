import { ImageProps } from 'next/dist/shared/lib/get-img-props';

type PropsType = {
  size?: number | string,
  data?: ImageProps,
  /**
   * множитель для высоты картинки, 100% умножается на переданны коэфициент и на основе этого вычисляется aspeсе-ratio, по дефолту 1:1. Так же может принять 'fill' который делает высоту картинки 100% без учета aspect-ratio
   */
  heightCoef?: number | 'fill'
}

export default PropsType;