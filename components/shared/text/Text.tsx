import styles from './styles.module.scss';
import { FC } from 'react';
import PropsType from './types';
import setClassNames from '@/utils/setClassNames';

const Text:FC<PropsType> = ({
    children,
    variant = 'primary',
    ...restProps
}) => {

    return (
        <p 
            {...restProps}
            className={setClassNames([styles.wrapper, styles[variant], restProps.className])}
            >
            {children}
        </p>
    )
}

export default Text;