import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.bg}></div>
      <div className={styles.container}>
        <div className={styles.label}>— Contact</div>
        <h2 className={styles.heading}>Let's Work<br /><span>Together</span></h2>
        <p className={styles.sub}>
          Open to full-time opportunities, internships, and project collaborations.<br />
          Feel free to reach out — I respond promptly.
        </p>

        <div className={styles.grid}>
          <a href="mailto:udhaayakumar1998@gmail.com" className={styles.card}>
            <div className={styles.cardIcon}>✉</div>
            <div className={styles.cardLabel}>Email</div>
            <div className={styles.cardValue}>udhaayakumar1998@gmail.com</div>
            <div className={styles.arrow}>→</div>
          </a>

          <a
            href="https://www.linkedin.com/in/udhaayakumar-a-868870351"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardIcon}>in</div>
            <div className={styles.cardLabel}>LinkedIn</div>
            <div className={styles.cardValue}>udhaayakumar-a-868870351</div>
            <div className={styles.arrow}>→</div>
          </a>

          <div className={styles.card}>
            <div className={styles.cardIcon}>📍</div>
            <div className={styles.cardLabel}>Location</div>
            <div className={styles.cardValue}>Vellore, Tamil Nadu, India</div>
          </div>
        </div>

        <div className={styles.cta}>
          <a href="mailto:udhaayakumar1998@gmail.com" className={styles.ctaBtn}>
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  )
}
