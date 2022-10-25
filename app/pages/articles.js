import Link from "next/link";
import Layout from "../componnent/layout";


export const getStaticProps = async ()=>{

    const res = await fetch ("http://localhost:3000/api/article_db")
    const data = await res.json()
    return {
        props : {article : data}
    }
    
    }

export default function article({article}){
return (
<Layout>
<h1>page article</h1>

<h1>All articles</h1>
        {
            article.map(article=>(
                <Link href={"/articles/"+article.id} key={article.id}>

<div key={article.id}>
<ul>
nom d'article : {article.name}
</ul>
    

</div>
 </Link>
            ))
        } 


</Layout>
);

}