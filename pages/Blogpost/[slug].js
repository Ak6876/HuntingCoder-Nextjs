import React, { useState,useEffect } from "react";
import styles from '../../styles/Blogpost.module.css'
import { useRouter } from "next/router";
import Blog from "../Blog";
const slug = (props) => {
  const [Blogs,setBlogs]=useState(props.myblog)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>{Blogs && Blogs.title}</h1>
      <hr />
      <div>
        {Blogs.content}
      </div>
      </main>
    </div>
  );
};

  export async function getServerSideProps(context) {
 
  // const router = useRouter();
    
      const { slug } = context.query;
    let data=await fetch(`http://localhost:3000/api/Getblog?slug=${slug}`)
    let myblog=await data.json();
    return {
      props: {myblog}, 
    }
  }
export default slug;
