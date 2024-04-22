import Image from "next/image";
import styles from './page.module.css';
import RouteContainer from "./_component/RouteContainer/RouteContainer";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import { getMetaType } from "@/api/root";
import { MSWComponent } from "../_component/MSWComponent";
import { FormEventHandler } from "react";
import SearchForm from "./_component/SearchForm/SearchForm";

export default async function Page() {
    // const router = useRouter();
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery({ queryKey: ['main', 'hash'], queryFn: getMetaType });
    await queryClient.prefetchQuery({ queryKey: ['main', 'Character'], queryFn: getMetaType });
    await queryClient.prefetchQuery({ queryKey: ['main', 'WeaponTypeInfo'], queryFn: getMetaType });
    const dehydratedState = dehydrate(queryClient);

    return (
        <>
            <MSWComponent></MSWComponent>
            <HydrationBoundary state={dehydratedState}>
                <main style={{ width: '1080px' }}>
                    <section className={`${styles['flex-center']} ${styles['main-section']}`}>
                        <div className={`${styles['main-section-imgWrapper']}`}>
                            <Image src={"/bg-landing-search-v2.jpg"} width={1920} height={350} alt="t"></Image>
                        </div>
                        <h2 className={styles['sr-only']}>이터널리턴 플레이어 검색</h2>
                        <Image src={'//cdn.dak.gg/er/images/logo/logo-dakgg.svg'} width={160} height={40} alt="DAK.GG"></Image>
                        <SearchForm></SearchForm>
                        <p className={styles['p-info']}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#ffffff" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216 192V224h24 48 24v24 88h8 24v48H296 216 192V336h24zm72-144H224V128h64v64z"></path></svg>
                            &quot;쉼표(,)로 구분하여 여러 플레이어 닉네임을 입력하면 멀티서치로 이동합니다.&quot;
                        </p>
                    </section>
                </main>
                <RouteContainer></RouteContainer>
            </HydrationBoundary>

        </>

    )
}