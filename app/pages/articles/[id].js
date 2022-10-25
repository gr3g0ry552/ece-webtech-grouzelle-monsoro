import article from "../articles";

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