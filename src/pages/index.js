import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <>
         <Head>
            <title>Thanksgiving</title>
        </Head>
          <Nav />
          <Hero imageURL='/home-hero.jpg'/>
          <section className={styles.text}>
          <h1>Your Thanksgiving Resource</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula mauris orci, in volutpat felis interdum id. Maecenas eget dignissim erat, nec iaculis justo. Fusce auctor vel lorem ut sollicitudin. Nunc ultrices nec tellus dapibus luctus. Sed nec ultrices diam. Donec varius nisl risus, non finibus enim bibendum non. In quis scelerisque sapien. In sed interdum lectus, sit amet malesuada diam. Ut euismod vehicula erat id placerat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis porttitor tellus eu augue fringilla, non condimentum dui dapibus. Praesent id consectetur nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</p>
          <div className={styles.subtext}>
            <p><span>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lorem augue, scelerisque quis purus id, posuere dignissim tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse laoreet finibus nisl rutrum fermentum. Pellentesque dui ante, faucibus sit amet ligula quis, fringilla volutpat dolor. Proin eleifend tortor faucibus malesuada blandit. Maecenas diam justo, finibus a iaculis et, tempus et lectus. Donec gravida maximus ex, quis mollis mauris ornare id. Vestibulum purus erat, venenatis sed arcu vel, placerat dapibus enim. Phasellus pharetra eros ante, a interdum nisi venenatis et. Duis eu nunc at eros ornare vestibulum id nec nisl. Ut aliquam aliquet nibh interdum hendrerit.</p>
            <p><span>S</span>ed facilisis, tortor a malesuada cursus, massa odio pellentesque quam, ut auctor lorem lorem sit amet neque. Donec risus arcu, dignissim et lacus sit amet, tincidunt ultrices mauris. Duis sollicitudin iaculis neque nec sodales. Etiam suscipit feugiat ultricies. Cras eu dui sit amet lectus iaculis commodo sed ut enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi mauris erat, auctor at augue eget, posuere pretium neque. Sed imperdiet faucibus risus ac molestie. Curabitur pellentesque, augue ut varius imperdiet, tortor enim fermentum ligula, et tincidunt leo nisi eu turpis.</p>
          </div>
          </section>
        </>
    )
}