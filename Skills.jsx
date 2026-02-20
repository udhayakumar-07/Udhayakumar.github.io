import styles from './Skills.module.css'

const skillGroups = [
  {
    title: 'Business & Analysis',
    skills: ['Business Analysis', 'Strategic Planning', 'Market Research', 'Financial Analysis', 'Data-Driven Decision Making', 'Competitive Analysis'],
  },
  {
    title: 'Marketing',
    skills: ['Digital Marketing', 'SEO / SEM', 'Content Strategy', 'Brand Management', 'Social Media Marketing', 'Consumer Behaviour'],
  },
  {
    title: 'HR & Finance',
    skills: ['Human Resource Management', 'Talent Acquisition', 'Financial Reporting', 'Budgeting & Forecasting', 'Payroll Management', 'GST & Taxation'],
  },
  {
    title: 'Tools & Tech',
    skills: ['MS Excel', 'PowerPoint', 'Google Analytics', 'Data Visualization', 'MS Word', 'Business Intelligence'],
  },
]

const soft = ['Analytical Thinking', 'Communication', 'Leadership', 'Team Collaboration', 'Problem Solving', 'Adaptability', 'Time Management', 'Critical Thinking']

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.label}>— Skills</div>
        <h2 className={styles.heading}>Expertise &<br /><span>Capabilities</span></h2>

        <div className={styles.grid}>
          {skillGroups.map((g, i) => (
            <div key={i} className={styles.group}>
              <h3 className={styles.groupTitle}>{g.title}</h3>
              <div className={styles.tags}>
                {g.skills.map(s => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.softSection}>
          <div className={styles.softLabel}>Soft Skills</div>
          <div className={styles.softTags}>
            {soft.map(s => (
              <span key={s} className={styles.softTag}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
