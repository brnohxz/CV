import styles from './header.module.css'
import {Nav} from "./navigation/Nav";

export const Header = () => {
    return <div className={styles.header}>
        <Nav/>
    </div>
}