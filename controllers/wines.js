const Wines = require('../models').Wines;

//Index Route

const index = (req, res) => {
    Wine.findAll()
        .then(wines => {
            res.render('index.ejs', {
                wines: wines,
        })
        console.log(wines)
    })
}




module.exports = {
    index,
    
};