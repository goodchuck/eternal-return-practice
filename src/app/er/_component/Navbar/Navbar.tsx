
"use client"

import Link from "next/link";
import styles from "./navbar.module.css";

import { usePathname } from "next/navigation";

const array: { href: string, title: string }[] = [
    {
        href: '/er',
        title: '메인'
    },
    {
        href: '/er2',
        title: '순위표'
    },
    {
        href: '/er3',
        title: '가이드'
    },
    {
        href: '/er4',
        title: '통계'
    },
    {
        href: '/er5',
        title: '루트'
    },
    {
        href: '/er6',
        title: '즐겨찾기'
    },
    {
        href: '/er7',
        title: '멀티서치'
    },
    {
        href: '/er8',
        title: '파티 찾기'
    },
    {
        href: '/er9',
        title: '시즌 성적표'
    },
]

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className={styles['nav-first']}>
            <nav className={styles['nav-second']}>
                <ul className={styles['nav-second-ul']}>
                    {
                        array.map((obj, i) => {
                            return (<li key={i}>
                                <Link href={obj.href}>
                                    <span className={pathname === obj.href ? styles['active'] : ''}>{obj.title}</span>
                                </Link>
                            </li>)
                        })
                    }
                </ul>
            </nav>
        </nav>
    )
}