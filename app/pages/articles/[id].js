import { useState, useEffect, useContext } from "react";
import md from "markdown-it";
import Head from "next/head";
import Layout from "../../Components/Layout.js";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { Context } from "../../Components/UserContext";
let idtf;

export default function artices({ id }) {
  const router = useRouter();
  const date = new Date();
  const [post, setPost] = useState(null);
  const [message, setMessage] = useState(null);
  const { user, username_contexte } = useContext(Context);
  //console.log(user);
  const [newComment, setNewComment] = useState(null);
  const [comments, setComment] = useState([]);
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
        .select(`id, publication_date, contenu, titre, auteur_username,url_img`)
        .eq("id", id)
        .single();
      setPost(data);
      console.log(data);
    })();
  }, [id, supabase]);

  idtf = `${id}`;

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("comments")
        .select(`username, publication_date, content, article_id`)
        .eq("article_id", idtf);
      setComment(data);
      console.log(data);
    })();
  }, [supabase]);

  const addfield = async (newComment) => {
    const { error } = await supabase
      .from("comments")
      .insert({
        content: newComment,
        username: username_contexte,
        publication_date: date,
        article_id: idtf,
      })
      .single();
    if (error) {
      setMessage("Sorry, an unexpected error occured.");
    } else {
      setMessage(
        <div>
          <h2 className="text-center mt-3">Confirmation</h2>
          <p>Votre commentaire a bien été ajouté</p>
          <button
            onClick={() => {
              router.push(`/articles/${post.id}`);
            }}
          >
            Retour a la page articles
          </button>
        </div>
      );
    }
  };

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
      <div class="space-y-10">
        <p></p>
        <label class="grid col-auto">
          <span>New Comment</span>
          <input
            type="text"
            placeholder="Content"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
        </label>
        <div>
          <button
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
            onClick={() => addfield(newComment)}
          >
            Send
          </button>
        </div>
        {message && (
          <div
            aria-label="Overlow below the drawer dialog"
            className="fixed inset-0 bg-black/80 flex items-center justify-center"
            onClick={() => setMessage(null)}
            role="dialog"
          >
            <div
              aria-label="Alert pane"
              className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
            >
              {message}
            </div>
          </div>
        )}
        <div>
          <table class="min-w-full divide-y divide-slate-300">
            <thead clasName="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                >
                  username
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  publication_date
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  Content
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              {comments?.map((com) => (
                <tr key={com.id}>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {com.username}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {com.publication_date}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {com.content}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log("Sortie :");
  console.log(context.params);
  return {
    props: {
      id: context.params.id,
    },
  };
}
