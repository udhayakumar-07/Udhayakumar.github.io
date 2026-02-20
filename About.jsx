import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.label}>— About Me</div>

        <div className={styles.grid}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Turning Business<br />
              Complexity Into<br />
              <span>Clear Strategy</span>
            </h2>
            <div className={styles.accentLine}></div>
          </div>

          <div className={styles.right}>
            <p className={styles.bio}>
              I'm <strong>Udhayakumar A</strong>, an MBA graduate from <strong>SRM University, Kattankulathur</strong> (Class of 2024–2025),
              specializing in Business Analysis, Marketing, Human Resources, and Finance.
            </p>
            <p className={styles.bio}>
              I'm passionate about leveraging data-driven insights to solve business problems
              and enabling organizations to make smarter, faster decisions. With a strong
              analytical mindset and cross-functional expertise, I bridge the gap between raw
              data and real-world strategy.
            </p>
            <p className={styles.bio}>
              Based in <strong>Vellore, Tamil Nadu</strong>, I'm open to opportunities in business analysis,
              market research, and strategic consulting roles.
            </p>

            <div className={styles.details}>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>🎓</span>
                <div>
                  <div className={styles.detailLabel}>Education</div>
                  <div className={styles.detailValue}>MBA — SRM University, Kattankulathur</div>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>📍</span>
                <div>
                  <div className={styles.detailLabel}>Location</div>
                  <div className={styles.detailValue}>Vellore, Tamil Nadu</div>
                </div>
              </div>
              <div className={styles.detail}>
                <span className={styles.detailIcon}>📅</span>
                <div>
                  <div className={styles.detailLabel}>Batch</div>
                  <div className={styles.detailValue}>2024 – 2025</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
