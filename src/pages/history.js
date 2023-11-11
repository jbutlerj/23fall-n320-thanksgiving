import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <>
        <Head>
        <title>Thanksgiving | History</title>
      </Head>
          <Nav />
          <Hero imageURL='/history-hero.jpg' calloutColor='whiteCallout' callout='The History of Thanksgiving'/>
        </>
    )
}