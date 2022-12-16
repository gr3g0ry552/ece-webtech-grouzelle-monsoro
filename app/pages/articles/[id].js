import { useState, useEffect, use } from "react";
import md from "markdown-it";
import Head from "next/head";
import Layout from "../../Components/Layout.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function artices({ id }) {
  const [post, setPost] = useState(null);
  const supabase = useSupabaseClient();
  const [images, setImages] = useState([]);
  async function getImages() {
    const { data, error } = await supabase
      .storage
      .from('images')
      .list(user?.id + "/", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" }
      }); if (data !== null) {
        setImages(data);
      } else {
      alert("Error loading images");
      console.log(error);
    }
  }

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("post")
        .select(`id, publication_date, contenu, titre, auteur_username`)
        .eq("id", id)
        .single();
      setPost(data);
      console.log(data);
    })();
  }, [id, supabase]);

  return (
    <Layout>
      <div>
        <h1 class="text-2xl font-bold">Article detail</h1>
      </div>
      <div>
        {post && (
          <div className="overflow-hidden divide-y divide-slate-200 shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <div className="bg-slate-50">
              <dl className="grid grid-cols-[auto_1fr] px-3 py-4 [&_dt]:italic [&_dt]:text-slate-500 [&_dt]:pr-3">
                <dt>Titre</dt>
                <dd>{post.titre}</dd>
                <dt>Publication Date</dt>
                <dd>{post.publication_date}</dd>
                <dt>Contenu</dt>
                <dd>{post.contenu}</dd>
                <dt>auteur_username</dt>
                <dd>{post.auteur_username}</dd>
              </dl>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log("donne de ssr");
  console.log(context.params);
  return {
    props: {
      id: context.params.id,
    },
  };
}
