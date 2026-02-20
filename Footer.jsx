import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.logo}>Udhayakumar<span>.A</span></span>
          <p className={styles.tagline}>MBA Graduate · Business Analyst · Vellore</p>
        </div>
        <div className={styles.right}>
          <p className={styles.copy}>© {new Date().getFullYear()} Udhayakumar.A — All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
