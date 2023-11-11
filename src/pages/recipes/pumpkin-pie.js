import React from 'react';
import Head from 'next/head';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import styles from '@/styles/Recipes.module.css'

export default function PumpkinPie() {
    return (
        <>
         <Head>
        <title>Thanksgiving | Pumpkin Pie</title>
      </Head>
          <Nav />
          <Hero imageURL='/pumpkin-pie-hero.png' callout='Pumpkin Pie'/>
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
                    <li>Pie Dough</li>
                    <li>1 15oz Can - Pumpkin Puree</li>
                    <li>1-1/2 Cups - Light Brown Sugar</li>
                    <li>1 Teaspoon - Cinnamon</li>
                    <li>1 Teaspoon - Nutmeg</li>
                    <li>1 Cup - Heavy Cream</li>
                    <li>1/4 Cup - Milk</li>
                    <li>3 Large Eggs</li>    
                </ul>
            </div>
            </section>
        </>
    )
}