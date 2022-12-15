import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../Components/Layout.js";

export default function Home() {
  return (
    <Layout>
      <div class="bg-tourEiffel w-screen h-screen bg-no-repeat bg-cover bg-center">
        <div class="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
          <div class="">
            <p class="relative h-32 w-32 space-y-10"></p>
            <h1 class="font-extrabold ">
              <center class="text-4xl dark:text-black">
                WELCOME TO OUR WEBSITE !
              </center>
            </h1>
          </div>
          <div class="relative h-32 w-32 space-y-10"></div>
          <div class="right-0">
            <h2 class="text-black">
              This website was designed by Yan GROUZELLE and Grégory MONSORO
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}
