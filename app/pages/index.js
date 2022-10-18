import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import link from 'next/link'
import Link from 'next/link'


export default function Home() {
  return (
  <><h1>Bienvenue</h1><div>
      <ul>
        <Link href='/about'>About</Link>
      </ul>
      <ul>
        <Link href='/articles'>Arcticles</Link>
      </ul>
      <ul>
        <Link href='/contacts'>contact</Link>
      </ul>
    </div></>
  
  );
}
