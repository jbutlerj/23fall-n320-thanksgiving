import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Recipe from '@/components/Recipe';
import styles from '@/styles/Recipes.module.css'
import Link from 'next/link';


export default function Recipes() {
    return (
        <>
         <Head>
        <title>Thanksgiving | Recipes</title>
      </Head>
          <Nav />
          <Hero imageURL='/recipes-hero.jpeg' callout='Thanksgiving Recipes'/>
          <section className={styles.recipes}>
            <Link href='/recipes/turkey'>
                <Recipe title='Thanksgiving Turkey' imageURL='/turkey.jpeg'/>
            </Link>
            <Link href='/recipes/stuffing'>
                <Recipe title='Thanksgiving Stuffing' imageURL='/stuffing.jpg'/>
            </Link>
            <Link href='/recipes/pumpkin-pie'>
                <Recipe title='Pumpkin Pie' imageURL='/pumpkin-pie.jpeg'/>
            </Link>
          </section>
        </>
    )
}