import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import styles from '@/styles/Contact.module.css'
import { useRouter } from 'next/router';

export default function Contact() {

    //daclaring variable
    const [fullName, setFullName] = React.useState('John Smith');
    const [phone, setPhone] = React.useState('317-555-1234');
    const [email, setEmail] = React.useState('email@domain.com');
    
    const router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault(); //prevent default functionality of submit button
        if(fullName !== '' && phone !== '' && email !== '') {
            router.push('/contact/successful');
            // console.log(fullName, phone, email);
        }
      }
    
      function updateContactInfo(e) {
        if(e.currentTarget.name === 'fullName') {
          setFullName(e.currentTarget.value);
        }
        if(e.currentTarget.name === 'phone') {
          setPhone(e.currentTarget.value);
        }
        if(e.currentTarget.name === 'email') {
          setEmail(e.currentTarget.value);
        }
      }

    return (
        <>
         <Head>
        <title>Thanksgiving | Contact</title>
      </Head>
          <Nav />
          <Hero imageURL='/contact-hero.jpg' callout='Comments & Questions'/>
          <section className={styles.contact}>
          <form className={styles.form} onSubmit={contactFormSubmit}>
            <div className={styles.formField}>
                <label>Full Name:</label>
                <input name='fullName' type='text' placeholder='Jerry Butler' onChange={updateContactInfo} value={fullName}/>
            </div>

            <div className={styles.formField}>
                <label>Phone Number:</label>
                <input name='phone' type='tel' placeholder='317-555-1234' onChange={updateContactInfo} value={phone}/>
            </div>

            <div className={styles.formField}>
                <label>Email:</label>
                <input name='email' type='email' placeholder='email@domain.com' onChange={updateContactInfo} value={email}/>
            </div>

            <div className={styles.formField}>
                <input type='submit' value='Submit' />
            </div>

        </form>
          </section>
        </>
    )
}