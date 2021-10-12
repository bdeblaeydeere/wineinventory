const Country = require('../models').Country;
const Producer = require('../models').Producer;
const Seller = require('../models').Seller;
const Note = require('../models').Note;


//Country controllers
const countryIndex = (req, res) => {
    Country.findAll({
        order: [
            ['countryName', 'ASC']
        ]
    })
        .then(countries => {
            res.render('configs/countryindex.ejs', {
                countries
            })
        })
}
//Add new wine (renderNew)
// const renderNew = (req, res) => {
//     res.render ('configs/newcountry.ejs');
// }

//POST create a New Wine in the Wines DB table
const postCountry = (req, res) => {
    console.log("bob: ",req.body)
    Country.create (req.body)
    .then (country => {
        // res.render ('configs/countryindex.ejs');
        res.redirect('/configs/') 
    })
}
//Delete - remove an existing Wine from the Wines DB table
const deleteCountry = (req, res) => {
    console.log("bob: ",req.body)
    Country.destroy ({
        where: {id:req.body.countryId}
    })
    .then (() => {
        res.redirect('/configs/')
    })
}

//Producer controllers
const producerIndex = (req, res) => {
    Producer.findAll()
        .then(producers => {
            res.render('configs/configindex.ejs', {
                producers
            })
        })
}
module.exports = {
    countryIndex,
    postCountry,
    deleteCountry,
    producerIndex
};