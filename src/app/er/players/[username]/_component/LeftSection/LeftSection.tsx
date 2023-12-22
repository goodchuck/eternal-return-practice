
import styles from './leftsection.module.css';
export default function LeftSection() {
    const headers = ['평균 TK', '승률', '게임 수', '평균 킬', 'TOP 2', '평균 딜량', '평균 어시', 'TOP 3', '평균 순위']
    return (
        <section className={styles['section']}>
            <header>
                <h2>랭크</h2>
            </header>
            <div className={styles['rank-wrapper']}>
                <img src={'//er-s3.dak.gg/tier/round/5.png'} alt='플래티넘'></img>
                <div>
                    <b className={styles['rp']}>4036<span>RP</span></b>
                    <div className={styles['tier']}>플래티넘 4 - 36 RP</div>
                    <div className={styles['rank']}>23,728위 (상위 20.37%)</div>
                    <div className={styles['local-rank']}>KR 22,649위 (상위 20.37%)</div>
                </div>
            </div>
            <div className={styles['range-wrapper']}>
                {headers.map((header, i) => {
                    return (
                        <div className={styles['range-wrapper-range']} key={i}>
                            <h4>{header}</h4>
                            <div className={styles['percent-bar']}>
                                <div style={{ width: '79.0997%' }}></div>
                            </div>
                            <div className={styles['value']}>5.54</div>
                        </div>
                    )
                })}
            </div>
            <div className={styles['graph-wrapper']}>
                <div>
                    <canvas></canvas>
                </div>
            </div>
        </section>
    )
}