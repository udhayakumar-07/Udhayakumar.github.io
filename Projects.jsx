import styles from './Projects.module.css'

const projects = [
  {
    id: '01',
    title: "India's State-wise GST Revenue Analysis",
    category: 'Data Analysis · Finance · Policy',
    desc: "A comprehensive analytical study of India's overall Goods & Services Tax (GST) revenue collection, broken down by state. The project explores revenue trends, state-wise performance, and growth patterns using structured data visualization and business intelligence techniques.",
    tags: ['GST Revenue', 'State Analysis', 'Data Visualization', 'Business Intelligence', 'Finance'],
    highlights: [
      'Analyzed state-wise GST collection across all Indian states',
      'Identified revenue growth trends and underperforming regions',
      'Produced actionable insights for policy and business strategy',
    ],
    year: '2024–25',
  }
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>— Projects</div>
        <h2 className={styles.heading}>Work &<br /><span>Projects</span></h2>

        <div className={styles.list}>
          {projects.map((p, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.num}>{p.id}</span>
                <span className={styles.year}>{p.year}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardLeft}>
                  <p className={styles.category}>{p.category}</p>
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.desc}</p>
                  <div className={styles.tags}>
                    {p.tags.map(t => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.cardRight}>
                  <div className={styles.highlights}>
                    <div className={styles.highlightTitle}>Key Outcomes</div>
                    {p.highlights.map((h, j) => (
                      <div key={j} className={styles.highlight}>
                        <span className={styles.bullet}>→</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
