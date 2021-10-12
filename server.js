const express = require('express'); //from documentation: express is function
const app = express();//app is an object
//new for all the files for routes, models, controllers
const routes = require('./routes');


//add static files
app.use(express.static("public"));

//include the method-override package
const methodOverride = require('method-override');
app.use(express.urlencoded({ extended: true}))

//after app has been defined, use methodOverride.  
//We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));

app.use('/wines', routes.wines)
app.use('/configs', routes.configs)
// //Default get page setup
// app.get('/', (req, res) => {
//     res.send('Test default page');
// });





//Listener Setup
app.listen(3001, ()=>{
    console.log("I am listening");
});