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
<div>
<h1>All articles</h1>
        {
            article.map(article=>(

<div key={article.id}>
<a>
    <h2>nom d'article : {article.name}</h2>
    <li>Prix : {article.price}</li>
    <li>type : {article.type}</li>
    
</a>


</div>

            ))
        } 
</div>

</Layout>
);

}