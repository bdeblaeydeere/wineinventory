const Wine = require('../models').Wine;
const Country = require('../models').Country;
const Producer = require('../models').Producer;
const Seller = require('../models').Seller;

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
        include: [{
            model: Country
        },
        {
            model: Producer,
        },
        {
            model: Seller,
        }

    ],
        //     model: Players,
        //     attributes: ['name']
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
    Wine.findByPk (req.params.index, {
        include: [Country]
    })
    
    .then (wine => {
        res.render ('wines/edit.ejs', {
            wine: wine
        })
    })
}

//PUT function -- execute PUT method to update an existing wine changed from the renderEdit page in the Wines DB table
const editWine = (req, res) => {
    Wine.update (req.body, {
        where: {id: req.params.index},
        returning: true,
    })
    // .then(wine => {
    //     Country.findByPk(req.body.countryId)
    //     .then (foundCountry => {
    //         console.log("Bob" + foundCountry)
    //         Wine.findByPk(req.params.index)
    //         .then(foundWine => {
    //             // foundWine.addCountry(foundCountry)
    //             res.render ('wines/show.ejs/' , {
    //                 wine: wine
    //             })
    //         })
    //     })
    // })
    .then (wine => {
        res.redirect ('/wines')
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
    editWine,
};