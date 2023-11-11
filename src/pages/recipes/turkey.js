import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import styles from '@/styles/Recipes.module.css'

export default function Turkey() {
    return (
        <>
         <Head>
        <title>Thanksgiving | Turkey</title>
      </Head>
          <Nav />
          <Hero imageURL='/turkey-hero.jpeg' callout='Thanksgiving Turkey'/>
          <section className={styles.recipeCard}>
            <div className={styles.instructions}>
                <h3>Instructions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia tempus nulla luctus laoreet. Pellentesque sed ex volutpat, vestibulum ipsum sed, posuere velit. Phasellus ornare lectus eu mi elementum, non ullamcorper orci viverra. Suspendisse vestibulum congue eros sed faucibus. Suspendisse vulputate arcu sit amet tincidunt gravida. Suspendisse velit massa, facilisis at blandit vel, maximus at erat. Pellentesque ultricies dapibus pharetra.</p>
                <p>Curabitur urna purus, accumsan ut congue cursus, fringilla sit amet metus. Suspendisse ac volutpat turpis. Vestibulum est enim, molestie vitae ipsum non, aliquet rutrum tellus. Curabitur elit eros, mollis vitae rhoncus eget, luctus ac eros. Sed ut tellus et orci dignissim bibendum. Quisque lacinia mi eu efficitur feugiat. Mauris congue lorem in metus finibus dapibus. Etiam auctor, lorem eleifend placerat euismod, leo elit scelerisque sem, in vestibulum metus ligula ac sem. Curabitur volutpat, tortor ac porttitor suscipit, arcu turpis facilisis enim, ac dignissim dui nulla sit amet nisl.</p>
                <p>Pellentesque dapibus ipsum sed sapien scelerisque, at blandit magna dignissim. In congue leo vel diam ultricies porttitor. Vivamus vel mattis nulla. In ornare eu ante vel blandit. Sed fringilla, ante quis luctus placerat, odio odio semper velit, interdum eleifend ex quam id justo. Maecenas suscipit velit ut auctor convallis. Duis nec dui id quam malesuada pellentesque. Donec at commodo nisl, quis cursus dui. Nulla a tincidunt urna. Nulla mollis dolor mauris, vel egestas diam maximus ut.</p>
            </div>
            <div className={styles.ingredients}>
                <h3>Ingredients</h3>
                <ul>
                    <li>1 - 12-20lb. Turkey</li>
                    <li>1 - Onion</li>
                    <li>1 - Lemon</li>
                    <li>1 - Apple</li>
                    <li>.75 ounce - Fresh Rosemary</li>
                    <li>.75 ounce - Fresh Thyme</li>
                    <li>.75 ounce  -Fresh Sage</li>
                </ul>
            </div>
          </section>
        </>
    )
}