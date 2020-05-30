import React, { useState } from "react"
import { FaBars } from "react-icons/fa"

import styles from "../../css/nav.module.css"
import links from "../../constants/links"

function Nav() {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          nextavailabletable.com
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaBars className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.path}>{item.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
