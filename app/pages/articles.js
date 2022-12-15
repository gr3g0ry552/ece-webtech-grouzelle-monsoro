import Layout from "../Components/Layout";
import { useRouter } from "next/router";
export default function articles() {
  const router = useRouter()
  return (
    <Layout>
      <div class="h-screen">TEST

      <button onClick={()=>{ router.push('/creation/articles')}}>cree un article </button>
      </div>
    </Layout>
  );
}
