
"use client"

import Link from "next/link";
import styles from "./routeContainer.module.css";

import Image from "next/image";
import Routes from "../Routes/Routes";
import RankingTable from "../RankingTable/RankingTable";

export default function RouteContainer() {
    return (
        <div style={{ width: '1080px', position: 'relative' }}>
            <div className={styles.container}>
                <section className={styles['container-section']}>
                    <h2 className={styles['sr-only']}>이터널리턴 최신 루트</h2>
                    <div>
                        <Image src={'/img-banner-route.png'} width={140} height={120} alt="no"></Image>
                        <div>
                            <p>
                                내 최애의&nbsp;
                                <strong >최신 루트</strong>를&nbsp;확인하세요!
                            </p>
                            <Link href={"/er/routes"}>
                                루트 바로가기
                                <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5.69531 1.58203C5.42188 1.85547 5.44922 2.26562 5.69531 2.53906L9.00391 5.65625H1.15625C0.773438 5.65625 0.5 5.95703 0.5 6.3125V7.1875C0.5 7.57031 0.773438 7.84375 1.15625 7.84375H9.00391L5.69531 10.9883C5.44922 11.2617 5.44922 11.6719 5.69531 11.9453L6.29688 12.5469C6.57031 12.793 6.98047 12.793 7.22656 12.5469L12.5586 7.21484C12.8047 6.96875 12.8047 6.55859 12.5586 6.28516L7.22656 0.980469C6.98047 0.734375 6.57031 0.734375 6.29688 0.980469L5.69531 1.58203Z" fill="#fff"></path></svg>
                            </Link>
                        </div>
                    </div>
                    <strong>최신 루트</strong>
                    <Routes></Routes>
                </section>
                <RankingTable></RankingTable>
            </div>
        </div>
    )
}