"use client"
import Image from 'next/image';
import styles from './rankingRow.module.css';
import Link from 'next/link';

type Props = {
    data: any;
}

export default function RankingRow({ data }: Props) {
    let userNum = data.userNum;

    return (
        <tr className={styles['rankingRow-tr']}>
            {/* 랭크 */}
            <td className={styles['rankingRow-td']}>{data.rank}</td>

            {/* 플레이어 */}
            <td className={styles['rankingRow-td']}>
                <div className={styles.playerWrapper}>
                    <div>
                        <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_Shoichi_S000.png'} width={36} height={36} alt='1'></Image>
                    </div>
                    <Link href={'https://dak.gg/er/players/%EA%B9%80%ED%95%B4%EC%82%AC%EB%8A%94%EA%B7%B8%EB%82%A8%EC%9E%90'}>
                        {data.nickname}
                    </Link>
                </div>
            </td>

            {/* 티어 */}
            <td className={styles['rankingRow-td']}>
                <div className={styles.tierWrapper}>
                    <Image src={'https://cdn.dak.gg/er/images/tier/round/8.png'} alt='이터니티' width={28} height={28}></Image>
                    <span>이터니티</span>
                </div>
            </td>

            {/* RP */}
            <td className={`${styles['rankingRow-td']} ${styles['RP']}`}>{data.mmr - 6000} RP</td>

            {/* 평균 순위 */}
            <td className={styles['rankingRow-td']}>#4.0</td>

            {/* TOP 3 */}
            <td className={styles['rankingRow-td']}>46.3%</td>

            {/* 평균 킬 */}
            <td className={styles['rankingRow-td']}>4.35</td>

            {/* 모스트 실험체 */}
            <td className={styles['rankingRow-td']}>
                <ul className={styles.mostWrapper}>
                    <li>
                        <div>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_Shoichi_S000.png'} alt='쇼이치' width={36} height={36}></Image>
                        </div>
                        <span>75.0%</span>
                    </li>
                    <li>
                        <div>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_Shoichi_S000.png'} alt='쇼이치' width={36} height={36}></Image>
                        </div>
                        <span>75.0%</span>
                    </li>
                    <li>
                        <div>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_Shoichi_S000.png'} alt='쇼이치' width={36} height={36}></Image>
                        </div>
                        <span>75.0%</span>
                    </li>
                </ul>
            </td>
        </tr>
    )
}