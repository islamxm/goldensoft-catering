import styles from './styles.module.scss';
import {FC} from 'react';
import Title from '@/components/shared/title/Title';
import navigationMenuList from '@/data/navigationMenuList';
import Link from 'next/link';

const FooterNavigation: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.label}><Title tag='h3'>Навигация</Title></div>
            <ul className={styles.list}>
                {
                    navigationMenuList.map(({label, href}) => (
                        <li className={styles.item}>
                            <Link href={href}>{label}</Link>
                        </li>
                    ))
                }
                 <li className={styles.item}>
                    <Link href={'/'}>{'Правовая информация'}</Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterNavigation;