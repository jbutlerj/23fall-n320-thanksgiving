import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import styles from '@/styles/Contact.module.css'

export default function Contact() {

    return (
        <>
         <Head>
        <title>Thanksgiving | Contact</title>
      </Head>
          <Nav />
          <Hero imageURL='/contact-hero.jpg' callout='Comments & Questions'/>
          <h1 className={styles.successful}>Submission Successful</h1>
        </>
    )
}