const express = require("express"); //npm install joi
const Joi = require('joi');
const app = express();

//const port = 3000;
const port = process.env.PORT || 3000;

const courses = [
    {id: 1, name: 'course 1'},
    {id: 2, name: 'course 2'},
    {id: 3, name: 'course 3'},
];



const infos = require("./content/about.json");

//get all articles
app.get("/", (req, res) => 
    res.send("WELCOME")); // Route handler...

app.get("/api/courses", (req,res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req,res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));    
    if (!course) //If course not found
        res.status(404).send("The course with the given ID was not found")
    res.send(course);
});

app.post('/api/courses', (req,res) => {

    const { error } = validateCourse(req.body);
    if (error) {
        //we've got a bad request
        res.status(400).send(error.details[0].message); //Less infos on the error with the details[0].message
        return;
    }

    const course = {
        id: course.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course); //returns course to the client
});


app.put('api/course/:id', (req,res) => {
    //Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));    
    
    //If not existing, return 404
    if (!course) //If course not found
        res.status(404).send("The course with the given ID was not found")

    //Validate
    const schema = {
        name: Joi.String().min(3).required()
    };

    const { error } = validateCourse(req.body);


    //If invalid, return 400 - Bad request
    if (error) {
        //we've got a bad request
        res.status(400).send(error.details[0].message); //Less infos on the error with the details[0].message
        return;
    }

    //Update course
    course.name = req.body.name;
    //Return the updated course to the client
    res.send(course);
    
});


app.delete('/api/courses/:id', (req,res) => {
    //Look up the course
    const course = courses.find(c => c.id === parseInt(req.params.id));    
    
    //If not existing, return 404
    if (!course) //If course not found
        res.status(404).send("The course with the given ID was not found")
    
    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course)
});


function validateCourse (course) {
    const schema = {
        name: Joi.String().min(3).required()
    };

    return Joi.validate(course, schema);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));