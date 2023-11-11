import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Event from '@/components/Event';

export default function History() {
    return (
        <>
        <Head>
        <title>Thanksgiving | History</title>
      </Head>
          <Nav />
          <Hero imageURL='/history-hero.jpg' callout='The History of Thanksgiving'/>
          <Event imageURL='/event1.jpg' header='First Thanksgiving - 1621' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem augue, scelerisque quis purus id, posuere dignissim tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet finibus nisl rutrum fermentum. Pellentesque dui ante, faucibus sit amet ligula quis, fringilla volutpat dolor. Proin eleifend tortor faucibus malesuada blandit. Maecenas diam justo, finibus a iaculis et, tempus et lectus. Donec gravida maximus ex, quis mollis mauris ornare id. Vestibulum purus erat, venenatis sed arcu vel, placerat dapibus enim. Phasellus pharetra eros ante, a interdum nisi venenatis et. Duis eu nunc at eros ornare vestibulum id nec nisl. Ut aliquam aliquet nibh interdum hendrerit.'/>
          <Event imageURL='/event2.jpg' header='Soured Relations - 1744' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem augue, scelerisque quis purus id, posuere dignissim tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet finibus nisl rutrum fermentum. Pellentesque dui ante, faucibus sit amet ligula quis, fringilla volutpat dolor. Proin eleifend tortor faucibus malesuada blandit. Maecenas diam justo, finibus a iaculis et, tempus et lectus. Donec gravida maximus ex, quis mollis mauris ornare id. Vestibulum purus erat, venenatis sed arcu vel, placerat dapibus enim. Phasellus pharetra eros ante, a interdum nisi venenatis et. Duis eu nunc at eros ornare vestibulum id nec nisl. Ut aliquam aliquet nibh interdum hendrerit.'/>
          <Event imageURL='/event3.jpg' header='Commercializing Thanksgiving - 1955' details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem augue, scelerisque quis purus id, posuere dignissim tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet finibus nisl rutrum fermentum. Pellentesque dui ante, faucibus sit amet ligula quis, fringilla volutpat dolor. Proin eleifend tortor faucibus malesuada blandit. Maecenas diam justo, finibus a iaculis et, tempus et lectus. Donec gravida maximus ex, quis mollis mauris ornare id. Vestibulum purus erat, venenatis sed arcu vel, placerat dapibus enim. Phasellus pharetra eros ante, a interdum nisi venenatis et. Duis eu nunc at eros ornare vestibulum id nec nisl. Ut aliquam aliquet nibh interdum hendrerit.'/>
        </>
    )
}