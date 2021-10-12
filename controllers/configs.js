const Country = require('../models').Country;
const Producer = require('../models').Producer;
const Seller = require('../models').Seller;
const Note = require('../models').Note;


//Country controllers
const countryIndex = (req, res) => {
    Country.findAll()
        .then(countries => {
            res.render('configs/countryindex.ejs', {
                countries
            })
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
    producerIndex
};