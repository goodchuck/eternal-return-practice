import Link from 'next/link';
import styles from './allspecimentable.module.css';

export default function AllSpecimenTable() {
    const headers = [
        { className: 'character', text: '실험체' },
        { className: 'win-rate', text: '승률' },
        { className: 'rp', text: 'RP' },
        { className: 'avg-kill', text: '평균 킬' },
        { className: 'avg-damage', text: '평균 딜량' }]
    const champions = [{}, {}];
    return (
        <div>
            <section className={styles['section']}>
                <h3><b>랭크</b>실험체 통계 </h3>
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, i) => {
                                return (<th className={styles[header.className]} key={i}>{header.text}</th>)
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {champions.map((cham, i) => {
                            return (
                                <tr key={i}>
                                    <td className={styles['character']}>
                                        <div>
                                            <Link href={'/er/characters/DebiMarlene'} className={styles['image-wrapper']}>
                                                <img src={'//cdn.dak.gg/assets/er/game-assets/1.11.0/CharProfile_DebiMarlene_S000.png'} alt='alt'></img>
                                            </Link>
                                            <div className={styles['info']}>
                                                <div className={styles['character-name']}>데비&마를렌</div>
                                                <div className={styles['plays']}>
                                                    109 게임
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={styles['win-rate']}>10.1%</td>
                                    <td className={styles['rp']}>
                                        <div>
                                            <img src={'//cdn.dak.gg/er/images/icons/arrow-up.svg'} alt='up-arrow' width={8}></img>
                                            676
                                        </div>
                                    </td>
                                    <td className={styles['avg-kill']}></td>
                                    <td className={styles['avg-damage']}></td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </section>
            <Link href={'/er/players/Yangti/character'} className={styles['a']}>
                <span>자세한 실험체 통계</span>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.52363 0.780167L8.4739 4.66445C8.56024 4.76613 8.625 4.88815 8.625 5.01017C8.625 5.13219 8.56024 5.25421 8.4739 5.33555L4.52363 9.21983C4.32935 9.4232 3.98398 9.4232 3.7897 9.24017C3.57384 9.05714 3.57384 8.75209 3.76811 8.54873L7.39459 4.98983L3.76811 1.45127C3.57384 1.26824 3.57384 0.942859 3.7897 0.75983C3.98398 0.576801 4.32935 0.576801 4.52363 0.780167Z" fill="#36436F"></path></svg>
            </Link>
        </div>
    )
}