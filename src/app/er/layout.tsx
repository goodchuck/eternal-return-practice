import { ReactNode } from "react";
import Header from "./_component/Header/Header";
import styles from './layout.module.css';
type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div>
            <Header></Header>
            <div className={styles['main-layout']}>
                <div className={styles['ad-left']}>

                </div>
                <div className={styles['ad-right']}>

                </div>
                {children}
            </div>
        </div>
    )
}