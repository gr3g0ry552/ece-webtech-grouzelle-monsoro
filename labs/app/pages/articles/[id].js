import Head from "next/head";
import Layout from "../../components/Layout.js";

export default function Article({ article }) {
  console.log(article)
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{article?.title}</h1>
      <p style={{ fontStyle: "italic" }}>
        This page fetch data at build time, excellent for SEO. {article?.message}
      </p>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://my-json-server.typicode.com/yGrouzelle/db-webtech/posts"
  );
  const data = await res.json();
  console.log(data)
  const paths = data.map(article => {
    return {
      params: { id: article.id.toString() }
    }
  })
  console.log(paths)
  return {
    paths,
    fallback: false
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const id = context.params.id
  const res = await fetch(
    `https://my-json-server.typicode.com/yGrouzelle/db-webtech/posts/${id}`
  )
 
  const data = await res.json()

  return {
    // Passed to the page component as props
    props: {article: data},
  };
}
