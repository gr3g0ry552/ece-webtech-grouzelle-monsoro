import Layout from "../Components/Layout";
import Image from "next/image";

export default function about() {
  return (
    <Layout>
      <div class="h-screen flex flex-col space-y-10 bg-slate-100 dark:bg-slate-800">
        <div class="text-center">
          <h1 class="text-6xl font-extrabold">Contributors</h1>
        </div>
        <div class=" md:flex mx-auto px-4 columns-2 gap-80">
          <ul>
            <div class="space-x-20">
              <li class=" hover:bg-slate-100 w-fit">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg"
                  width="384"
                  height="512"
                />
                <div>
                  <a
                    href="https://github.com/gr3g0ry552"
                    class="text-blue-500 font-bold"
                  >
                    Grégory MONSORO
                  </a>
                  <p>gregory.monsoro@edu.ece.fr</p>
                </div>
              </li>
            </div>
          </ul>
          <ul>
            <div>
              <li class=" hover:bg-slate-100 w-fit">
                <img
                  class="w-20 h-20 rounded-full"
                  src="https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_960_720.jpg"
                  width="384"
                  height="512"
                />
                <div>
                  <a
                    href="https://github.com/yGrouzelle"
                    class="text-blue-500 font-bold"
                  >
                    Yan Grouzelle
                  </a>
                  <p>yan.grouzelle@edu.ece.fr</p>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div>
          <h1>Grégory MONSORO</h1>
        </div>
      </div>
    </Layout>
  );
}
