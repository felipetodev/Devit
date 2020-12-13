import styles from '../styles/AppLayout.module.css'

export default function AppLayout ({ children }) {
  return (
        <>
            <div className={styles.grid}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
  )
}
