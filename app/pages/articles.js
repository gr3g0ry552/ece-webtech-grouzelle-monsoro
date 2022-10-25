import Layout from "../componnent/layout";

export default function article(){
return (
<Layout>
<h1>Page article</h1>
<div className="Liste_d_articles">
    <h2 className="TitreArticles">Liste des articles</h2>
    <ul>
        article1
        <li>Id :2</li>
        <li>
            type :aspirateur
        </li>
    </ul>
    <ul>article2
        <li>Id :1</li>
        <li>type :four</li>
    </ul>
</div>

</Layout>
);

}