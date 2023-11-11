import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import styles from '@/styles/Recipes.module.css'

export default function Stuffing() {
    return (
        <>
         <Head>
        <title>Thanksgiving | Stuffing</title>
      </Head>
          <Nav />
          <Hero imageURL='/stuffing-hero.jpeg' callout='Thanksgiving Stuffing'/>
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
                <li>24oz. - Bread Crumbs</li>
                    <li>1 Cup - Butter</li>
                    <li>3 Cups - Diced Sweet Onion</li>
                    <li>2 Cups - Diced Celery</li>
                    <li>6 Garlic Cloves, pressed</li>
                    <li>3 Tablespoons - Fresh Sage</li>
                    <li>3 Tablespoons - Fresh Parsley</li>
                    <li>3 Tablespoons - Fresh Rosemary</li>
                    <li>3 Large Eggs</li>
                    <li>2-1/2 Cups - Chicken Stock</li>
                </ul>
            </div>
            </section>
        </>
    )
}