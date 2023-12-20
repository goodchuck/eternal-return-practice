import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
export default async function Page() {
    return (
        <main className={`${styles.container} ${styles['container-section']}`}>
            <div id='content-container'></div>
            <h2 className='sr-only'>Yangti 이터널리턴 프로필 정보</h2>
            {/* 광고 영역 */}
            <div className={styles['ad-top']}>

            </div>
            <section className={styles['section']}>
                <div className={styles['section-container']}>
                    <div className={styles['content']}>
                        <div className={styles['profile-image-wrapper']}>
                            <img src={`//cdn.dak.gg/assets/er/game-assets/1.10.0/CharResult_DebiMarlene_S001.png`} alt='most-skin'></img>
                        </div>
                        <div>
                            <div className={styles['top']}>
                                <h3>YangTi</h3>
                                <span>
                                    Lv.
                                    51
                                </span>
                            </div>
                            <div className={styles['middle']}>
                                <button className={styles['cu-button']}>전적 갱신</button>
                                <Link className={styles['card-link']} href={'https://dak.gg/ko/cards/edit?game=er&nickname=YangTi&from=er'}>
                                    <div className={styles['inner']}>
                                        <span className={styles['link-text']}>닥지지 카드 만들기</span>
                                        <span className={styles['link-text-short']} >닥지지 카드</span>
                                    </div>
                                </Link>
                                <button className={styles['bookmark-button']}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3812_39993)"><path d="M8.98294 0C9.32405 0 9.59693 0.210745 9.73337 0.491738L12.087 5.44424L17.3059 6.2521C17.6128 6.28722 17.8516 6.53309 17.954 6.81408C18.0563 7.1302 17.9881 7.44632 17.7493 7.69218L13.963 11.5558L14.8499 17.0001C14.9181 17.3162 14.7817 17.6674 14.5429 17.8431C14.27 18.0187 13.9289 18.0538 13.6561 17.9133L8.98294 15.3141L4.30984 17.9133C4.03695 18.0538 3.72996 18.0187 3.45708 17.8431C3.21831 17.6674 3.08186 17.3162 3.11598 17.0001L4.03695 11.5558L0.250711 7.69218C0.0119386 7.44632 -0.056282 7.1302 0.0460489 6.81408C0.14838 6.53309 0.387152 6.28722 0.694144 6.2521L5.91302 5.44424L8.26663 0.491738C8.40307 0.210745 8.67595 0 8.98294 0ZM8.98294 2.77481L7.20921 6.60334C7.07277 6.84921 6.86811 7.02483 6.59522 7.05995L2.5361 7.65706L5.46958 10.6426C5.67425 10.8534 5.74247 11.1343 5.70836 11.4153L5.02615 15.5951L8.60773 13.6282C8.8465 13.4877 9.1535 13.4877 9.39227 13.6282L12.9738 15.5951L12.2916 11.4153C12.2234 11.1343 12.3258 10.8534 12.5304 10.6426L15.4298 7.65706L11.4048 7.05995C11.1319 7.02483 10.8931 6.84921 10.7908 6.60334L8.98294 2.77481Z" fill="white"></path></g><defs><clipPath id="clip0_3812_39993"><rect width="18" height="18" fill="#fbdb51"></rect></clipPath></defs></svg>
                                </button>
                            </div>
                            <p>
                                최근 업데이트: 3일 전
                            </p>
                        </div>

                    </div>
                    <div className={styles['filter']}>
                        {/* TODO: 해당부분 기능붙여야함 */}
                        <details>
                            <summary className={styles['summary']}>
                                <div>
                                    <div>
                                        <img src={'https://er-s3.dak.gg/tier/round/5.png'}></img>
                                        <div>정규시즌 2</div>
                                    </div>
                                </div>
                                <svg className="transform rotate-0" width="8" viewBox="0 0 8 4" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M1.48047 0C1.12891 0 0.953125 0.429688 1.20703 0.683594L3.70703 3.18359C3.86328 3.33984 4.11719 3.33984 4.27344 3.18359L6.77344 0.683594C7.02734 0.429688 6.85156 0 6.5 0H1.48047Z"></path></svg>
                            </summary>
                            <ul></ul>
                        </details>
                    </div>
                </div>
                <div className={styles['section-nav']}>
                    <Link className={styles['active']} href={'/er/players/YangTi'}>프로필</Link>
                    <Link href={'/er/palyers/YangTi/character'}>실험체</Link>
                    <Link href={'/er/players/YangTi/matches'}>매치 히스토리</Link>
                </div>
            </section>
            <div className={styles['tab']}>
                <nav>
                    <ul>
                        <li className={styles['active']}>
                            <Link href={'/er/players/yangti?gameMode=ALL'}>전체</Link>
                        </li>
                        <li>
                            <Link href={'/er/players/yangti?gameMode=RANK'}>랭크</Link>
                        </li>
                        <li>
                            <Link href={'/er/players/yangti?gameMode=NORMAL'}>일반</Link>
                        </li>
                        <li>
                            <Link href={'/er/players/yangti?gameMode=COBALT'}>코발트</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles['value-container']}>
                <div className={styles['left']}></div>
                <div className={styles['right']}></div>
            </div>
        </main>
    )
}