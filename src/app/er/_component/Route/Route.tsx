"use client";
import Link from "next/link"
import styles from "./route.module.css"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type Props = {
    data: {
        recommendWeaponRoute: {
            characterCode: number;
            weaponCodes: string;
            weaponType: number;
        }
    },
    chaData: any,
    weaponData: any,

}

export default function Route({ data, chaData, weaponData }: Props) {
    console.log({ data, chaData, weaponData })
    const row = data['recommendWeaponRoute'];

    const { name } = chaData?.data
        .find((obj: any) => obj.code === row['characterCode'])
    const weaponType = weaponData.data[row['weaponType']];
    const weaponCodes = JSON.parse(row['weaponCodes']);


    return (
        <li className={styles.container}>
            <Link className={styles.link} href={'/er/routes/114041'}>
                <div>
                    <div className={styles.chaProfile}>
                        <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_${name}_S000.png`} alt="셀린" width={36} height={36}></Image>
                    </div>
                    <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/Ico_Ability_${weaponType?.type}.png`} alt="무기" width={16} height={16} className={styles.weaponProfile}></Image>
                </div>
                {name}
                <ul className={styles.chaRoutes}>
                    {weaponCodes?.map((obj: any, i: number) => {
                        return (<li key={i}>
                            <div className={styles.routeBox}>
                                <Image src={`https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_${obj}.png`} alt="소이탄" width={24} height={24}></Image>
                            </div>
                        </li>)
                    })}
                </ul>
            </Link>
        </li>
    )
}