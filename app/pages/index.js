import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export default function Home() {
  const session = useSession()
  const supabase = useSupabaseClient()
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
