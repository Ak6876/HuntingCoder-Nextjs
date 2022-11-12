import React from "react";
import styles from '../../styles/Blogpost.module.css'

import { useRouter } from "next/router";
const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
        voluptates dolore eveniet reprehenderit harum ex quod debitis vel culpa,
        ab enim ipsam doloribus!
      </div>
      </main>
    </div>
  );
};

export default slug;
