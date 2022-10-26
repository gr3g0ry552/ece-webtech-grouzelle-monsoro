import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <div class="static place-content-center">
        <div class="h-0">
          <h1>
            Welcome to <a href="https://www.adaltas.com">web technologies!</a>
          </h1>

          <ul>
            <li>
              <Link href="/articles">
                View our articles
              </Link>
            </li>
            <li>
              <Link href="/about">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contacts">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}
