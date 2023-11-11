import React from 'react';
import styles from '@/styles/Recipe.module.css';

export default function Recipe(props) {
    return (
        <>
            <div className={styles.recipeContainer}>
                <h1>{props.title}</h1>
                <div className={styles.foodIMG} style={{backgroundImage: `url(${props.imageURL})`}}></div>
            </div>
        </>
    )
}