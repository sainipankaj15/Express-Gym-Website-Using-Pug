const express = require('express');
const path = require('path');

const app = express();
const port = 8001;

//EXPRESS STUFF
app.use('/static', express.static('static')); // serving static file 


//PUG STUFF
app.set('view engine', 'pug'); //set template engine as a pug
app.set('views', path.join(__dirname, 'views')); // set the views folder

//ENDPOINTS
app.get("/", (req, res) => {

    res.status(200).render('index.pug');

});





// SERVER START
app.listen(port, () => {

    console.log(`this is running on port ${port}`);
});