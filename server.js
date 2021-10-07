const express = require('express'); //from documentation: express is function
const app = express();//app is an object

//Default get page setup
app.get('/', (req, res) => {
    res.send('Test default page');
});





//Listener Setup
app.listen(3001, ()=>{
    console.log("I am listening");
});