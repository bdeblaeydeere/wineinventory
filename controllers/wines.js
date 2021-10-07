const Wine = require('../models').Wine;

//Index Route
const index = (req, res) => {
    Wine.findAll()
        .then(wines => {
            res.render('wines/index.ejs', {
                wines: wines,
        })
        // console.log(wines)
    })
}

//Show route
const show = (req, res) => {
    Wine.findByPk(req.params.index, {
        // include: [{
        //     model: Players,
        //     attributes: ['name']
        // },
      
        // ],
    })
    .then (wine => {
        res.render('wines/show.ejs', {
            wine: wine})
        })
}




module.exports = {
    index,
    show,
};