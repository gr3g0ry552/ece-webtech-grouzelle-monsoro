//import { supabase } from "@supabase/auth-ui-react/dist/esm/common/theming";
import Layout from "../Components/Layout";
//import { supabase } from "../utils/supabase";
import { supabase } from "@supabase/supabase-js";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Button from "../Components/DarkMode";

export default function articles() {
  const [post, setPost] = useState([]);
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      let { data, error, status } = await supabase
        .from("post")
        .select(`id, publication_date, contenu, titre, auteur_username`);
      setPost(data);
      console.log(data);
    })();
  }, [supabase]);

  return (
    <Layout>
      <div class="space-y-10">
        <p></p>
        <div>
          <h1 class="text-3xl font-bold">Articles</h1>
        </div>
        <div>
          <table class="min-w-full divide-y divide-slate-300">
            <thead clasName="bg-slate-50">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 sm:pl-6"
                >
                  publication_date
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  contenu
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  titre
                </th>
                <th
                  scope="col"
                  class="px-3 py-3.5 text-left text-sm font-semibold text-slate-900"
                >
                  auteur_username
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 bg-white">
              {post.map((posts) => (
                <tr key={post.id}>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {posts.publication_date}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {posts.contenu}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {posts.titre}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-slate-500">
                    {posts.auteur_username}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <Button
            class="bg-green-600 rounded-md"
            onClick={() => router.push("/creation/article")}
          >
            Add
          </Button>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    </Layout>
  );
}
