import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'
import InfiniteScroll from "react-infinite-scroll-component";
import * as fs from 'fs';
const Blog = (props) => {
  const [count, setCount] = useState(2)
  const [blogs, setBlogs] = useState(props.allBlogs)
  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/Blogs/?count=${count + 2}`)
    setCount(count + 2)
    let data = await d.json();
    setBlogs(data)
  };
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        > {blogs.map((blogitem) => {
          return <div key={blogitem.slug}><h3 className={styles.blogitemh3}>{blogitem.title}</h3>
            <p className={styles.blogitemp}>{blogitem.content.substr(0, 140)}</p>
            <Link href={`/Blogpost/${blogitem.slug}`}>
              <button className={styles.btn}>Read More</button></Link> </div>
        })}
        </InfiniteScroll>
      </main >
    </div>
  )
}
export async function getServerSideProps(context) {
  let data = await fs.promises.readdir("Blogdata")
  let allcount = data.length;
  let myfile
  let allBlogs = []
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(("Blogdata/" + item), 'utf-8')
    allBlogs.push(JSON.parse(myfile))
    return {
      props: { allBlogs, allcount },
    }
  }
}
export default Blog
