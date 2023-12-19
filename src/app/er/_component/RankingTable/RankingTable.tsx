"use client"
import { useQuery } from "@tanstack/react-query"
import RankingRow from "../RankingRow/RankingRow"
import styles from "./rankingTable.module.css"
import Link from "next/link"
import { getRankingTop } from "@/api/ranking/api"
import { getMetaType } from "@/api/root"
export default function RankingTable() {
    const thead: { width?: string, className?: string, text: string }[] = [
        {
            width: '80px',
            text: '랭크'
        },
        {
            text: '플레이어'
        },
        {
            width: '120px',
            text: '티어'
        },
        {
            width: '100px',
            text: "RP"
        },
        {
            width: '100px',
            text: '평균 순위'
        },
        {
            width: '100px',
            text: 'TOP 3'
        },
        {
            width: '100px',
            text: '평균 킬'
        },
        {
            width: '200px',
            text: '모스트 실험체'
        }]

    const { data } = useQuery({
        queryKey: ['ranking', '3', '21'],
        queryFn: getRankingTop
    })

    const { data: chaData } = useQuery({
        queryKey: ['main', 'Character'],
        queryFn: getMetaType
    })
    console.log({ data });
    return (
        <>
            <table className={styles.rankingTable}>
                <caption className={styles.title}>
                    <div>
                        정규시즌2 랭킹
                        <span>최근 업데이트: 방금</span>
                    </div>
                </caption>
                <thead>
                    <tr>
                        {thead.map((obj, i) => <th style={{ width: obj["width"] }} key={i}>{obj.text}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {chaData && data?.topRanks?.slice(0, 5).map((obj, i) => {
                        return (<RankingRow data={obj} chaData={chaData} key={i}></RankingRow>)
                    })}
                </tbody>
            </table>
            <Link className={styles.leaderBoard} href={'/er/leaderboard'}>
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 4.375H6.375V1C6.375 0.601562 6.02344 0.25 5.625 0.25H4.875C4.45312 0.25 4.125 0.601562 4.125 1V4.375H0.75C0.328125 4.375 0 4.72656 0 5.125V5.875C0 6.29688 0.328125 6.625 0.75 6.625H4.125V10C4.125 10.4219 4.45312 10.75 4.875 10.75H5.625C6.02344 10.75 6.375 10.4219 6.375 10V6.625H9.75C10.1484 6.625 10.5 6.29688 10.5 5.875V5.125C10.5 4.72656 10.1484 4.375 9.75 4.375Z" fill="#646464"></path></svg>
                더 보기
            </Link>
        </>

    )
}