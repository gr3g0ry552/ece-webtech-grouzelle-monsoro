import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <div class="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="">
          <p class="relative h-32 w-32 space-y-10"></p>
          <h1 class="font-extrabold ">
            <center class="text-4xl">
              WELCOME TO OUR WEBSITE !
            </center>            
          </h1>
        </div>
        <div class="relative h-32 w-32 space-y-10">
        </div>
        <div class="right-0">
          <h2>
            This website was designed by Yan GROUZELLE and Grégory MONSORO
          </h2>
        </div>
      </div>
    </Layout>
  )
}
