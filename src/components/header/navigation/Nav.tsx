import styles from './nav.module.css'

export const Nav = () => {
    const nav = ['Main', 'Skills', 'Projects', 'Contacts']
    return <div className={styles.nav}>
        {nav.map((n,i) => <a key={i} href=''>{n} </a>)}
    </div>
}