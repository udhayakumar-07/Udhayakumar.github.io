import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid}></div>
      {/* Glow blob */}
      <div className={styles.blob}></div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot}></span>
          Open to Opportunities
        </div>

        <h1 className={styles.name}>
          Udhayakumar<span>.A</span>
        </h1>

        <p className={styles.title}>MBA Graduate | Business Analyst</p>

        <p className={styles.desc}>
          Specializing in Business Analysis, Marketing, HR, and Finance.<br />
          Transforming data into actionable insights and driving strategic growth.
        </p>

        <div className={styles.ctas}>
          <a href="#projects" className={styles.primary} onClick={e => { e.preventDefault(); document.getElementById('projects').scrollIntoView({behavior:'smooth'}) }}>
            View Projects
          </a>
          <a href="#contact" className={styles.secondary} onClick={e => { e.preventDefault(); document.getElementById('contact').scrollIntoView({behavior:'smooth'}) }}>
            Contact Me
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>2025</span>
            <span className={styles.statLabel}>Graduating Year</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>4+</span>
            <span className={styles.statLabel}>Specializations</span>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.stat}>
            <span className={styles.statNum}>SRM</span>
            <span className={styles.statLabel}>University</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine}></div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
