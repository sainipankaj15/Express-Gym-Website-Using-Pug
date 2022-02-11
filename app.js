const express = require('express');
const path = require('path');
const fs = require('fs');
const res = require('express/lib/response');

const app = express();
const port = 8000;

//EXPRESS STUFF
app.use('/static', express.static('static')); // serving static file 

// To extract the data from the website to the app.js file, we have to write-
app.use(express.urlencoded())

//PUG STUFF
app.set('view engine', 'pug'); //set template engine as a pug
app.set('views', path.join(__dirname, 'views')); // set the views folder

//ENDPOINTS
app.get("/", (req, res) => {

    res.status(200).render('index.pug');
});


app.post("/",(req,res)=>{

    let name = req.body.Name;
    let gender = req.body.Gender;
    let age = req.body.Age;
    let address = req.body.address;
    let alloutputdata = `Client name is ${name} with gender ${gender} and his/her age is ${age} his/her address is ${address} and more about him/her is`;
    fs.writeFileSync('database.txt',alloutputdata);

    const messaged = { 'message' : "Your form has submitted successfully"};
    res.render('index.pug',messaged)
});




// SERVER START
app.listen(port, () => {

    console.log(`this is running on port ${port}`);
});