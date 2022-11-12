import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
            <div className="blogitem">         
            <Link href={'/Blogpost/learn-javascript'}> 
          <h3 className={styles.blogitemh3}>How To Learn Javascript In 2022?</h3></Link>
          <p>Javascript is  a language used to describe logic for web</p>
        </div>
        <div className="blogitem">
          <h3 className={styles.blogitemh3}>How To Learn Javascript In 2022?</h3>
          <p>Javascript is  a language used to describe logic for web</p>
        </div>
        <div className="blogitem">
          <h3 className={styles.blogitemh3}>How To Learn Javascript In 2022?</h3>
          <p>Javascript is  a language used to describe logic for web</p>
        </div>
        </main >
    </div>
        
    
  )
}

export default Blog
