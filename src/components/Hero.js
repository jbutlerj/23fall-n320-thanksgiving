import React from 'react';
import styles from '@/styles/Hero.module.css';

export default function Hero(props) {
    return (
        <>
          <div className={styles.heroContainer} style={{backgroundImage: `url(${props.imageURL})`}}>
          </div>
          <h1 className={styles.callout}>{props.callout}</h1>
        </>
    )
}