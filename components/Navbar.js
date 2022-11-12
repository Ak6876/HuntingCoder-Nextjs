import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
       <nav className={styles.mainnav}>
        <ul>
          <Link rel="stylesheet" href="/" ><li>Home</li></Link>
         <Link rel="stylesheet" href="/about" ><li>About</li></Link>
          <Link rel="stylesheet" href="/Blog" ><li>Blogs</li></Link>
          <Link rel="stylesheet" href="/Contact" ><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
