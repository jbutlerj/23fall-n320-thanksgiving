import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Nav.module.css';


export default function Nav() {
    return (
        <>
          <header className={styles.navContainer}>
            <h1>Thanksgiving</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                        <div className={styles.underline}></div>
                    </li>
                    <li>
                        <Link href="/history">History</Link>
                        <div className={styles.underline}></div>
                    </li>
                    <li>
                        <Link href="/recipes">Recipes</Link>
                        <div className={styles.underline}></div>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                        <div className={styles.underline}></div>
                    </li>
                </ul>
            </nav>
          </header>
        </>
    )
}