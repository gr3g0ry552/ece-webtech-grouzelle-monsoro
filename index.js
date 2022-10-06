const express = require("express");
const app = express();
//const port = 3000;
const port = process.env.PORT || 3000;


//app.get()
//app.post()
//app.put()
//app.delete()

const infos = require("./content/about.json");
//const articles = require("./content/articles");


//import db from 

app.get("/", (req, res) => 
    res.send("WELCOME")); // Route handler...

app.get("/api/courses", (req,res) => {
    res.send([1,2,3]);
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));