import { useState,useContext } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head'
import Layout from '../../Components/Layout'
import { useRouter } from "next/router";
import { Context } from '../../Components/UserContext';
import { v4 as uuidv4 } from 'uuid';

export default function Contact() {
  const { user,username_contexte} = useContext(Context);
  console.log(user)
  const supabase = useSupabaseClient()
  const [message, setMessage] = useState(null)
  const [newContenu, setNewContent] = useState('')
  const [newTitle, setNewTitle] = useState('')


  const router = useRouter()
 
  async function uploadImage(e) {
    let file = e.target.files[0];

    // userid: Cooper
    // Cooper/
    // Cooper/myNameOfImage.png
    // Lindsay/myNameOfImage.png

    const { data, error } = await supabase
      .storage
      .from('publications')
      .upload(user.id + "/" + uuidv4(), file)  // Cooper/ASDFASDFASDF uuid, taylorSwift.png -> taylorSwift.png

    if(data) {
    console.log("ajout reussi")
    } else {
      console.log(error);
    }
  }
  
  const addfield = async (newContenu,newTitle) => {
   
    const { error } = await supabase
      .from('post')
      .insert({ titre: newTitle,auteur_username:username_contexte,contenu: newContenu,id_auth:user.id })
      .single()
      if (error) {
        setMessage('Sorry, an unexpected error occured.')
      } else {
        setMessage(
          <div>
            <h2 class="text-center mt-3">Confirmation</h2>
            <p>Votre poste a bien était ajouté</p>
            <button onClick={()=>{ router.push('/articles')}}>Retour a la page articles</button>
          </div>
        )
      }
  
  }
  return (
    <Layout>
      <Head>
        <title>Création de poste</title>
       
     
      </Head>
      <h1 class='wt-title'>
        Publication
      </h1>
      <div class="[&_span]:block grid gap-3">
        <label><span>
          Titre</span>
        <input
          type='text'
          placeholder='Titre de la publication'
          
          onChange={(e) => {
            setNewTitle(e.target.value);
          }}
        />
</label>
<label><span>
          Descriptipon</span>
        <input
          type='text'
          placeholder='Description'
         
          onChange={(e) => {
            setNewContent(e.target.value);
          }}
        />
</label>
<label><span>
          Image</span>
        <input
          type='file'
          placeholder='Ficher png/jpg'
          accept='image/png,image/jpeg'
        
          onChange={(e) => {
            uploadImage(e);
          }}
        />
</label>
        <button
          class="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
          onClick={() => addfield(newContenu, newTitle)}>
          Send
        </button>
      </div>

      {message &&
        <div
          aria-label="Overlow below the drawer dialog"
          class="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            class="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message} 
          </div>
        </div>
      }
    </Layout>
  )
}
