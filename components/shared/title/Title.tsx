import setClassNames from '@/utils/setClassNames';
import styles from './styles.module.scss';
import PropsType from './types';
import React, { FC } from 'react'


const Title:FC<PropsType> = (props) => {
  const {
    children,
    variant = 'primary',
    tag = 'h2',
    element = tag, //надо удалить
    as = element,
    className,
    ...restProps
  } = props

  switch(tag) {
    case 'h1':
      return React.createElement(
        as, 
        {
          className: setClassNames([className, styles.h1, styles[variant]]), 
          ...restProps
        },
        children
      )
    case 'h2':
      return React.createElement(
        as, 
        {
          className: setClassNames([className, styles.h2, styles[variant]]), 
          ...restProps
        },
        children
      )
    case 'h3':
      return React.createElement(
        as, 
        {
          className: setClassNames([className, styles.h3, styles[variant]]), 
          ...restProps
        },
        children
      )
    case 'h4':
      return React.createElement(
        as, 
        {
          className: setClassNames([className, styles.h4, styles[variant]]), 
          ...restProps
        },
        children
      )
    case 'h5':
      return React.createElement(
        as, 
        {
          className: setClassNames([className, styles.h5, styles[variant]]), 
          ...restProps
        },
        children
      )
    case 'h6':
      return React.createElement(
        as, 
        {
          className: setClassNames([className, styles.h6, styles[variant]]), 
          ...restProps
        },
        children
      )
  }
}

export default Title;