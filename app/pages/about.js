import Layout from "../Components/Layout";
import Image from "next/image";

export default function about() {
  return (
    <Layout>
      <div class="h-screen">
        <ul role="liste" class="flex">
          <li class=" hover:bg-slate-100">
            <img
              class="w-20 h-20 rounded-full"
              src="https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg"
              width="384"
              height="512"
            />
            <div>
              <a href="https://github.com/gr3g0ry552">Grégory MONSORO</a>
              <p>gregory.monsoro@edu.ece.fr</p>
            </div>
          </li>

          <li class=" hover:bg-slate-100">
            <img
              class="w-20 h-20 rounded-full"
              src="https://cdn.pixabay.com/photo/2016/05/28/08/32/elephant-1421167_960_720.jpg"
              width="384"
              height="512"
            />
            <div>
              <a href="https://github.com/yGrouzelle">Yan Grouzelle</a>
              <p>yan.grouzelle@edu.ece.fr</p>
            </div>
          </li>
        </ul>
      </div>
    </Layout>
  );
}
