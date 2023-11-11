import React from 'react';
import styles from '@/styles/Event.module.css';

export default function Event(props) {
    return (
        <>
          <div className={styles.eventContainer}>
            <div className={styles.leftIMG} style={{backgroundImage: `url(${props.imageURL})`}}></div>
            <div className={styles.rightText}>
                <h3>{props.header}</h3>
                <p>{props.details}</p>
            </div>
          </div>
        </>
    )
}