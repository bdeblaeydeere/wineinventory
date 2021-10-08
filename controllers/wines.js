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

//Add new wine (renderNew)
const renderNew = (req, res) => {
    res.render ('wines/new.ejs');
}

//POST create a New Wine in the Wines DB table
const postWine = (req, res) => {
    Wine.create (req.body)
    .then (wine => {
        res.redirect('/wines') 
    })
}

//Render Edit page - render the page to allow editing of an existing wine in the Wines DB table
const renderEdit = (req, res) => {
    Wine.findByPk (req.params.index)
    .then (wine => {
        res.render ('wines/edit.ejs', {
            wine: wine
        })
    })
}

//Delete - remove an existing Wine from the Wines DB table
const deleteWine = (req, res) => {
    Wine.destroy ({
        where: {id:req.params.index}
    })
    .then (() => {
        res.redirect('/wines')
    })
}

module.exports = {
    index,
    show,
    renderNew,
    postWine,
    deleteWine,
    renderEdit,
};