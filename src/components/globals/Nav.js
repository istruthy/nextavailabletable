import React, { useState } from "react"
import styled from "styled-components"
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
                <a href="#">{item.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

const NavWrapper = styled.nav`
  /* nav */

  .nav {
    background: var(--light);
    justify-content: space-between;
    align-content: center;
    margin: 0 auto;
  }
  .nav__header {
    display: flex;
    border-bottom: 0.5rem solid var(--dark);
  }

  .nav__btn {
    align-self: center;
    font-size: 3rem;
    color: var(--grey);
  }
  .nav__links {
    list-style-type: none;
    background: var(--grey);
  }
  .nav__single-link {
    display: block;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    text-transform: lowercase;
    font-weight: 200;
    color: var(--black);
    /* transition: all 1s linear */
  }
  .nav__single-link:hover {
    background: var(--grey);
    color: var(--black);
    padding-left: 1.5rem;
    cursor: pointer;
  }

  /* nav javascript */
  .nav__links {
    height: 0;
    overflow: hidden;
    transition: all 2s ease;
  }
  .show__links {
    height: 264px;
  }
  /*  */

  @media (min-width: 768px) {
    .nav {
      display: flex;
      flex-wrap: wrap;
      border-bottom: 0.5rem solid var(--dark);
      margin: 0 8rem;
      height: 8vh;
    }

    .nav__logo {
      display: block;
      text-decoration: none;
      font-size: 1.5rem;
      padding: 0.5rem 1rem;
      text-transform: lowercase;
      font-weight: 400;
      color: var(--black);
      flex-grow: 4;
      text-align: right;
    }

    .nav__header {
      border-bottom: none;
    }
    .nav__btn {
      display: none;
    }
    .nav__links {
      background: transparent;
      height: auto;
      /* as a flex child */
      flex: 1 0 auto;
      /* as a flex parent */
      display: flex;
      flex-wrap: wrap;
      /* justify-content: space-around; */
      align-self: center;
    }
    .nav__single-link {
      background: transparent;
      color: var(--black);
      flex: 1 0 100px;
    }
    .nav__single-link:hover {
      padding-left: 1rem;
      color: var(--black);
    }
  }
`

export default Nav
