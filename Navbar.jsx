import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['Home', 'About', 'Certifications', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Udhayakumar<span>.A</span></div>
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`} onClick={e => handleNav(e, l)}>{l}</a>
          </li>
        ))}
      </ul>
      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
        <span className={menuOpen ? styles.x : ''}></span>
        <span className={menuOpen ? styles.x : ''}></span>
        <span className={menuOpen ? styles.x : ''}></span>
      </button>
    </nav>
  )
}
