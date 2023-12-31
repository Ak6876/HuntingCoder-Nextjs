import React, { useState } from "react";
import styles from "../styles/Contact.module.css"
const Contact = () => {
  const [name, setname] = useState(' ')
  const [email, setemail] = useState(' ')
  const [phone, setphone] = useState(' ')
  const [desc, setdesc] = useState(' ')
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { phone,name,email,desc };

    fetch('http://localhost:3000/api/postcontact', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log('Success:', data);
        setphone(' ')
        setemail(' ')
        setname(' ')
        setdesc(' ')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const handleChange = (e) => {
    if  (e.target.name == 'name'){
      setname(e.target.value)
    }
    else if (e.target.name == 'email') {
      setemail(e.target.value)
    }
    else if (e.target.name == 'phone') {
      setphone(e.target.value)
    }
    else if (e.target.name == 'desc') {
      setdesc(e.target.value)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name
          </label>
          <input className={styles.input}
            type="text"
            id="name"
            name="name"
            value={name} required
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email Address
          </label>
          <input className={styles.input}
            type="email"
            id="email"
            name="email"
            onChange={handleChange} 
            value={email} required
          />
          <div id="emailhelp" className={styles.formtext}>We'll Never Share Your Email With Anyone Else.</div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            phone
          </label>
          <input className={styles.input}
            type="phone"
            id="phone"
            name="phone"
            value={phone} required
            onChange={handleChange} 
          />
        </div>
        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="desc">Elaborate Your Concern</label>
          <textarea className={styles.input} value={desc} onChange={handleChange}  name="desc"  id="desc" />
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
