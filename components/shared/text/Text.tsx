import styles from './styles.module.scss';
import { FC } from 'react';
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const Text:FC<PropsType> = ({
    children,
    variant = 'primary',
    ellipsisLineCount,
    ...restProps
}) => {
    const {
        style
    } = restProps || {}

    return (
        <p 
            {...restProps}
            style={{...style, WebkitLineClamp: ellipsisLineCount ? ellipsisLineCount : 'none'}}
            className={setClassNames([styles.wrapper, styles[variant], restProps.className])}
            >
            {children}
        </p>
    )
}

export default Text;