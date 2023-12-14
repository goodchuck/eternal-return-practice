import Route from "../Route/Route"
import styles from "./routes.module.css"

export default function Routes() {
    const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <ul className={styles.container}>
            {datas?.map((obj, i) => <Route></Route>)}
        </ul>
    )
}