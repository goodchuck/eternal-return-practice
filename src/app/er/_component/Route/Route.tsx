
import Link from "next/link"
import styles from "./route.module.css"
import Image from "next/image"

export default function Route() {
    const name = '셀린'
    return (
        <li className={styles.container}>
            <Link className={styles.link} href={'/er/routes/114041'}>
                <div>
                    <div className={styles.chaProfile}>
                        <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/CharProfile_Celine_S000.png'} alt="셀린" width={36} height={36}></Image>
                    </div>
                    <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/Ico_Ability_HighAngleFire.png'} alt="무기" width={16} height={16} className={styles.weaponProfile}></Image>
                </div>
                {name}
                <ul className={styles.chaRoutes}>
                    <li>
                        <div className={styles.routeBox}>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_112302.png'} alt="소이탄" width={16} height={24}></Image>
                        </div>
                    </li>
                    <li>
                        <div className={styles.routeBox}>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_112302.png'} alt="소이탄" width={16} height={24}></Image>
                        </div>
                    </li>
                    <li>
                        <div className={styles.routeBox}>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_112302.png'} alt="소이탄" width={16} height={24}></Image>
                        </div>
                    </li>
                    <li>
                        <div className={styles.routeBox}>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_112302.png'} alt="소이탄" width={16} height={24}></Image>
                        </div>
                    </li>
                    <li>
                        <div className={styles.routeBox}>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_112302.png'} alt="소이탄" width={16} height={24}></Image>
                        </div>
                    </li>
                    <li>
                        <div className={styles.routeBox}>
                            <Image src={'https://cdn.dak.gg/assets/er/game-assets/1.10.0/ItemIcon_112302.png'} alt="소이탄" width={16} height={24}></Image>
                        </div>
                    </li>
                </ul>
            </Link>
        </li>
    )
}