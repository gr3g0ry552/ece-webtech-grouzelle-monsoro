import Head from "next/head";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../Components/Layout";
import { Context } from "../Components/UserContext";
import { data } from "autoprefixer";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from "next/link";

export default function User() {
  const { user, logout,setUsername_contexte,CDNURL} = useContext(Context)

  const supabase = useSupabaseClient()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [full_name, setfull_name] = useState(null)
  const [adresse, setAdresse] = useState(null)
  const [nationality, setnationality] = useState(null)
  const [post, setPost] = useState([]);
  const router = useRouter()

  
  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("post")
        .select(`id, publication_date, contenu, titre, auteur_username,url_img`).eq("id_auth",user.id)
      setPost(data);
     
    })();
  }, [user]);
  useEffect(function () {
    if (!user) {
      router.push('/login')
    } else {
      getProfile()
    }

  }, [user])

  const deconnecter = function () {
    logout()
  }
  async function getProfile() {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website,full_name,adresse,nationality`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
     
        setWebsite(data.website)
        setfull_name(data.full_name)
        setAdresse(data.adresse)
        setnationality(data.nationality)
        setUsername_contexte(data.username)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {

      setLoading(false)
    }
  }


  async function updateProfile({ username, full_name, adresse, nationality }) {
    try {
      setLoading(true)

      const updates = {
        id: user.id,
        username,
        full_name,
        adresse,
        nationality,
      
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
      
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (


    <Layout>
      <Head>
        <title>WebTech - User</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!(user) ?
        <p> redirecting </p>
        : <>
          <p style={{ fontStyle: "italic" }}>
            Cette page affiche les données de l'utilisateurs connecté :

          </p>
          <div>
          <div>

            <label>
              Email : {user.email}
 
            </label>

          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username || ''}
              onChange={(e) => {setUsername(e.target.value)
                setUsername_contexte(e.target.value)}
              }
            />
          </div>
          <div>
            <label htmlFor="full_name">Full name</label>
            <input
              id="full_name"
              type="text"
              value={full_name || ''}
              onChange={(e) => setfull_name(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adresse">Adresse</label>
            <input
              id="adresse"
              type="text"
              value={adresse || ''}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="nationality">Nationality</label>
            <input
              id="nationality"
              type="text"
              value={nationality || ''}
              onChange={(e) => setnationality(e.target.value)}
            />
          </div>
          </div>
          <div>
            <button
              class="button primary block"
              onClick={() => updateProfile({ username, full_name, adresse,nationality })}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </button>
          </div>


          <button onClick={deconnecter}>Se deconnecter</button>
          <br></br>
        
          <div class="space-y-10 bg-slate-100 dark:bg-slate-800">
        <p></p>
        <div>
          <h1 class="text-3xl font-bold">Mes publications</h1>
        </div>
        {post.map((posts) => (

          <>
          <div>titre : {posts.titre}</div>
          {posts.url_img?
          <img src={CDNURL+posts.url_img}></img>:<p>sans image</p>}
          </>
        ))}
      
      </div>

        </>
      }
    </Layout>
  )

}