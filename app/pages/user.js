import Head from "next/head";
import Layout from "/components/Layout.js";

export default function User( {user } ) {
  return (
    <Layout>
      <Head>
        <title>WebTech - User</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p style={{ fontStyle: "italic" }}>
        Cette page affiche les données de l'utilisateurs connecté :
        
      </p>

     
      {user.map( users => (
        <div>
         <li>Username : {users.name}</li>
         <li>Addresse : {users.addresse}</li>
         <li>Email : {users.mail}</li>
         </div>
           
        ))}

    
    </Layout>
  );
}
export const getStaticProps = async () => {
    const res = await fetch('https://my-json-server.typicode.com/yGrouzelle/Webtech-User/posts');
    const db = await res.json();
  console.log(db)
    return {
    
      props: { user: db }
    }
  }