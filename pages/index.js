import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from './_hero'
import Grids from './_grids'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greenzone </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
  
        <Hero/>
        
        <br />

        <Grids />

        <br />

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        
          <span className={styles.logo}>
          Built by Teenagers and Kids, who want a Better world
          </span>
        </a>
      </footer>
    </div>
  )
}
