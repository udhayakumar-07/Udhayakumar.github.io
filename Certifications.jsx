import styles from './Certifications.module.css'

const certs = [
  {
    title: 'Digital Marketing',
    issuer: 'Programming Hub',
    status: 'Verified Certificate',
    year: '2024',
    icon: '📱',
    color: '#e63946',
    desc: 'Comprehensive digital marketing strategies including SEO, SEM, social media, content marketing, and analytics.',
  }
]

export default function Certifications() {
  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>— Certifications</div>
        <h2 className={styles.heading}>Credentials &<br /><span>Certificates</span></h2>

        <div className={styles.grid}>
          {certs.map((c, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.icon} style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                  {c.icon}
                </div>
                <div className={styles.badge}>{c.status}</div>
              </div>
              <h3 className={styles.certTitle}>{c.title}</h3>
              <p className={styles.issuer}>{c.issuer} · {c.year}</p>
              <p className={styles.desc}>{c.desc}</p>
              <div className={styles.cardFoot}>
                <div className={styles.verifiedLine}>
                  <span className={styles.verifiedDot}></span>
                  <span>Verified & Authenticated</span>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for more certifications */}
          <div className={`${styles.card} ${styles.addCard}`}>
            <div className={styles.addIcon}>+</div>
            <p className={styles.addText}>More certifications coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
