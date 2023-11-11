import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <>
         <Head>
        <title>Thanksgiving | Recipes</title>
      </Head>
          <Nav />
          <Hero imageURL='/recipes-hero.jpeg' calloutColor='blackCallout' callout='Thanksgiving Recipes'/>
        </>
    )
}