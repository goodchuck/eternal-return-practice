"use client";
import { UseQueryResult, useQueries, useQuery } from "@tanstack/react-query"
import Route from "../Route/Route"
import styles from "./routes.module.css"
import { getLastRoutes } from "../Route/_lib/getLastRoutes";
import { getMetaType } from "@/api/root";

export default function Routes() {

    const { data } = useQuery({
        queryKey: ['routes'],
        queryFn: getLastRoutes
    })

    const { data: chaData } = useQuery({
        queryKey: ['main', 'Character'],
        queryFn: getMetaType
    })

    const { data: weaponData } = useQuery({
        queryKey: ['main', 'WeaponTypeInfo'],
        queryFn: getMetaType
    })
    console.log({ data, chaData });
    return (
        <ul className={styles.container}>
            {chaData && weaponData && data?.result?.slice(0, 10).map((obj: any, i: number) => <Route data={obj} chaData={chaData} weaponData={weaponData} key={i}></Route>)}
        </ul>
    )
}