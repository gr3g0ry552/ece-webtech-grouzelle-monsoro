import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import {db} from './api/articles.js'

export default function Articles( {data} ) {
  
console.log(articles)
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Web technologies articles
      </h1>
      <p class="italic font-bold">This page fetch data from the client side, not good for SEO.</p>
      <ul>
        {data.map( article => (
          <li key={article.slug}>
            <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
            <p>{article.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(){
  const res= db
  console.log(res)
  const data = res.json()
  return {
    props:{
      data,
    },
  }
}