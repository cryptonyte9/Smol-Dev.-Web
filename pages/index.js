import React from 'react';
import Head from 'next/head';
import InscribeButton from '../components/InscribeButton';
import MintButton from '../components/MintButton';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BRC721 Token Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to BRC721 Token Generator
        </h1>

        <div className={styles.grid}>
          <InscribeButton id="inscribe-button" className={styles.card} />
          <MintButton id="mint-button" className={styles.card} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/github.svg" alt="GitHub Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}