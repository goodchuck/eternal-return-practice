"use client"
import Image from 'next/image';
import styles from './rankingRow.module.css';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getUserStats } from '@/api/user/api';
import { getMetaType } from '@/api/root';

type Props = {
    data: any;
    chaData: any;
}

export default function RankingRow({ data, chaData }: Props) {
    let userNum = data.userNum;
    let seasonId = "21";
    const { data: stats, isLoading: statsLoading, isError: statsError } = useQuery({
        queryKey: ['user', 'stats', seasonId, userNum.toString()],
        queryFn: getUserStats
    })
    if (statsLoading) {
        return <div>Loading...</div>; // 데이터 로딩 중에 표시될 UI
    }

    if (statsError) {
        return <div>Error occurred while fetching data</div>; // 데이터 로딩 중에 에러가 발생한 경우 표시될 UI
    }

    console.log('stats', { stats, userNum });
    const row = stats['userStats'][0]
    const firstCha = chaData?.data
        .find((obj: any) => obj.code === stats['userStats'][0]['characterStats'][0]['characterCode']);
    const secondCha = chaData?.data
        .find((obj: any) => obj.code === stats['userStats'][0]['characterStats'][1]['characterCode']);
    const thirdCha = chaData?.data
        .find((obj: any) => obj.code === stats['userStats'][0]['characterStats'][2]['characterCode']);
    return (
        <tr className={styles['rankingRow-tr']}>
            {/* 랭크 */}
            <td className={styles['rankingRow-td']}>{data.rank}</td>

            {/* 플레이어 */}
            <td className={styles['rankingRow-td']}>
                <div className={styles.playerWrapper}>
                    <div>
                        <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_${firstCha.name}_S000.png`} width={36} height={36} alt='1'></Image>
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
            <td className={`${styles['rankingRow-td']} ${styles['RP']}`}>{row.mmr - 6000} RP</td>

            {/* 평균 순위 */}
            <td className={styles['rankingRow-td']}>#{row.averageRank.toFixed(1)}</td>

            {/* TOP 3 */}
            <td className={styles['rankingRow-td']}>{((row.top3) * 100).toFixed(2)}%</td>

            {/* 평균 킬 */}
            <td className={styles['rankingRow-td']}>{row.averageKills}</td>

            {/* 모스트 실험체 */}
            <td className={styles['rankingRow-td']}>
                <ul className={styles.mostWrapper}>
                    <li>
                        <div>
                            <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_${firstCha.name}_S000.png`} alt='쇼이치' width={36} height={36}></Image>
                        </div>
                        <span>{(stats['userStats'][0]['characterStats'][0].totalGames / row.totalGames * 100).toFixed(1)}%</span>
                    </li>
                    <li>
                        <div>
                            <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_${secondCha.name}_S000.png`} alt='쇼이치' width={36} height={36}></Image>
                        </div>
                        <span>{(stats['userStats'][0]['characterStats'][1].totalGames / row.totalGames * 100).toFixed(1)}%</span>
                    </li>
                    <li>
                        <div>
                            <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_${thirdCha.name}_S000.png`} alt='쇼이치' width={36} height={36}></Image>
                        </div>
                        <span>{(stats['userStats'][0]['characterStats'][2].totalGames / row.totalGames * 100).toFixed(1)}%</span>
                    </li>
                </ul>
            </td>
        </tr>
    )
}