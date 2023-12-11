import Link from "next/link"
import styles from './header.module.css'
import Image from "next/image"
import Navbar from "../Navbar/Navbar"
export default function Header() {
    return (
        <header className={styles.header}>
            {/* 검색폼 */}
            <div className={styles.headerContainer}>
                <div>
                    <Link href={"/"}>
                        <Image src={"//cdn.dak.gg/er/images/gnb/dakgg.svg"} width={57} height={14} alt="alt-test">
                        </Image>
                    </Link>
                    {/* select */}
                    <div className={styles['game-list-dropdown']}>
                        <div className={styles['btn-dropdown-trigger']}>
                            <Image src={"//cdn.dak.gg/er/images/gnb/family/ico-er.svg"} width={20} height={20} className={styles['game-icon']} alt="alt-test"></Image>
                            <div className={styles['game-name']}>이터널 리턴</div>
                            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.59334 1C5.9566 1 6.13824 1.52071 5.87588 1.8284L3.29263 4.85799C3.13118 5.04734 2.86882 5.04734 2.70737 4.85799L0.124121 1.8284C-0.138239 1.52071 0.043395 1 0.406664 1H5.59334Z" fill="white"></path></svg>
                        </div>
                    </div>
                    {/* divider */}
                    <div className={styles.divider}>

                    </div>
                    {/* 검색영역 */}
                    <div className={styles.searchForm}>
                        <div className={styles['searchForm-container']}>
                            <div className={styles.inner}></div>
                            <div className={styles['searchForm-form-wrapper']}>
                                <form className={styles['search-form']}>
                                    <input type="text" name="player" className={styles['search-input']} placeholder="플레이어 닉네임을 입력해주세요.">
                                    </input>
                                    <button className={styles['search-button']} type="submit">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.824 11.0391L8.68035 7.89844C9.3607 7.07812 9.73607 6.02344 9.73607 4.875C9.73607 2.20312 7.53079 0 4.85631 0C2.15836 0 0 2.20312 0 4.875C0 7.57031 2.18182 9.75 4.85631 9.75C5.9824 9.75 7.03812 9.375 7.8827 8.69531L11.0264 11.8359C11.1437 11.9531 11.2845 12 11.4487 12C11.5894 12 11.7302 11.9531 11.824 11.8359C12.0587 11.625 12.0587 11.2734 11.824 11.0391ZM1.1261 4.875C1.1261 2.8125 2.79179 1.125 4.87977 1.125C6.94428 1.125 8.63343 2.8125 8.63343 4.875C8.63343 6.96094 6.94428 8.625 4.87977 8.625C2.79179 8.625 1.1261 6.96094 1.1261 4.875Z" fill="white"></path></svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* 언어설정 */}
                    <div className={styles['locale-dropdown']}>
                        <button className={styles['btn-dropdown-trigger']}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0.5C3.85685 0.5 0.5 3.85685 0.5 8C0.5 12.1431 3.85685 15.5 8 15.5C12.1431 15.5 15.5 12.1431 15.5 8C15.5 3.85685 12.1431 0.5 8 0.5ZM13.8367 5.09677H11.3266C11.0544 3.76613 10.6008 2.61694 10.0262 1.8004C11.6895 2.375 13.0504 3.55444 13.8367 5.09677ZM10.6613 8C10.6613 8.69556 10.6008 9.36089 10.5101 9.93548H5.45968C5.36895 9.36089 5.33871 8.69556 5.33871 8C5.33871 7.33468 5.36895 6.66935 5.45968 6.06452H10.5101C10.6008 6.66935 10.6613 7.33468 10.6613 8ZM8 1.46774C8.78629 1.46774 9.84476 2.82863 10.3589 5.09677H5.61089C6.125 2.82863 7.18347 1.46774 8 1.46774ZM5.94355 1.8004C5.36895 2.61694 4.91532 3.76613 4.64315 5.09677H2.13306C2.91935 3.55444 4.28024 2.375 5.94355 1.8004ZM1.46774 8C1.46774 7.33468 1.55847 6.6996 1.73992 6.06452H4.49194C4.40121 6.6996 4.37097 7.33468 4.37097 8C4.37097 8.69556 4.40121 9.33064 4.49194 9.93548H1.73992C1.55847 9.33064 1.46774 8.69556 1.46774 8ZM2.13306 10.9032H4.64315C4.91532 12.2641 5.36895 13.4133 5.94355 14.2298C4.28024 13.6552 2.91935 12.4758 2.13306 10.9032ZM8 14.5323C7.18347 14.5323 6.125 13.2016 5.61089 10.9032H10.3589C9.84476 13.2016 8.78629 14.5323 8 14.5323ZM10.0262 14.2298C10.6008 13.4133 11.0544 12.2641 11.3266 10.9032H13.8367C13.0504 12.4758 11.6895 13.6552 10.0262 14.2298ZM11.4778 9.93548C11.5685 9.33064 11.629 8.69556 11.629 8C11.629 7.33468 11.5685 6.6996 11.4778 6.06452H14.2298C14.4113 6.6996 14.5323 7.33468 14.5323 8C14.5323 8.69556 14.4113 9.33064 14.2298 9.93548H11.4778Z" fill="white"></path></svg>
                        </button>
                        <ul></ul>
                    </div>
                </div>
            </div>
            {/* NavBar */}
            <Navbar></Navbar>
        </header >
    )
}