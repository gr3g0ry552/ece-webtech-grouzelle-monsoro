import article from "../articles";
/*
export const getStaticPaths = async ()=>{

    const res = await fetch ("http://localhost:3000/api/article_db")
    const data = await res.json()

    const path=data.map(article=>{
        return{
            params:{id : article.id.toString()}
        }
    })
    return {
        path,
        fallback:false 
    }
    
    }*/
    /*
    export const getStaticProps = async (context)=>{

      const id=context.params.id;
      const res = await fetch ("http://localhost:3000/api/article_db/"+id)
      const data = await res.json()
      return{
        props:{article :data}
      }
        
        }*/
export default function detail(){
return(
<div>
    fiche d'article :
    <ul>{article.name}</ul>
    <li>price : {article.price}</li>
    <li>type : {article.type}</li>
</div>
);



}