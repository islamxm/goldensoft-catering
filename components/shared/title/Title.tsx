import setClassNames from '@/utils/setClassNames';
import styles from './styles.module.scss';
import PropsType from './types';
import { FC } from 'react'

const Title:FC<PropsType> = (props) => {
  const {
    children,
    variant = 'primary',
    tag = 'h2',
    ...restProps
  } = props

  switch(tag) {
    case 'h1':
      return (
        <h1
          className={setClassNames([restProps?.className, styles[variant]])}
          {...restProps}
          >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={setClassNames([restProps?.className, styles[variant]])}
          {...restProps}
          >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3
          className={setClassNames([restProps?.className, styles[variant]])}
          {...restProps}
          >
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4
          className={setClassNames([restProps?.className, styles[variant]])}
          {...restProps}
          >
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5
          className={setClassNames([restProps?.className, styles[variant]])}
          {...restProps}
          >
          {children}
        </h5>
      )
    case 'h6':
      return (
        <h6
          className={setClassNames([restProps?.className, styles[variant]])}
          {...restProps}
          >
          {children}
        </h6>
      )
  }
}

export default Title;