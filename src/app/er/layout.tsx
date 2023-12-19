import { ReactNode } from "react";
import Header from "./_component/Header/Header";
import styles from './layout.module.css';
import RQProvider from "../_component/RQProvider";
type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
    return (
        <div>
            <RQProvider>
                <Header></Header>
                <div className={styles['main-layout']}>
                    <div className={styles['ad-left']}>

                    </div>
                    <div className={styles['ad-right']}>

                    </div>
                    {children}
                </div>
            </RQProvider>

        </div>
    )
}