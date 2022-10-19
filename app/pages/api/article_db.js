//db use for articles page

export const article_db=[{
id :1,
name: "aspirateur9000",
price:22,
type:"aspirateur"},

{
id:2,
name:"toaster2",
price:23,
type:"grille pains"




}]
export default function handler(req, res) {
    res.status(200).json(article_db)
  }