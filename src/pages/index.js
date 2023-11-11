import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <>
         <Head>
            <title>Thanksgiving</title>
        </Head>
          <Nav />
          <Hero imageURL='/home-hero.jpg'/>
        </>
    )
}