const Country = require('../models').Country;
const Producer = require('../models').Producer;
const Seller = require('../models').Seller;
const Note = require('../models').Note;


//Country controllers
const countryIndex = (req, res) => {
    Country.findAll({
        order: [
            ['countryName', 'ASC']
        ],
    })
        .then(countries => {
            Producer.findAll({
                order: [
                    ['producerName', 'ASC']
                ],
            })
                .then(producers => {
                    Note.findAll({
                        order: [
                            ['name', 'ASC']
                        ],
                    })
                        .then(notes => {
                            Seller.findAll({
                                order: [
                                    ['sellerName', 'ASC']
                                ],
                            })
                                .then(sellers => {
                                    res.render('configs/countryindex.ejs', {
                                        countries,
                                        producers,
                                        notes,
                                        sellers,
                                    })
                                })
                        })
                })
        })
}

// const countryIndex = (req, res) => {
//     Country.findAll({
//         order: [
//             ['countryName', 'ASC']
//         ]
//     })
//         .then(countries => {
//             res.render('configs/countryindex.ejs', {
//                 countries
//             })
//         })
// }

//POST Country -create a new NEW Country in the Countries DB table
const postCountry = (req, res) => {
    console.log("bob: ",req.body)
    Country.create (req.body)
    .then (country => {
        // res.render ('configs/countryindex.ejs');
        res.redirect('/configs/') 
    })
}
//Delete - remove an existing Country from the Countries DB table
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
// const producerIndex = (req, res) => {
//     Producer.findAll({
//         order: [
//             ['producerName', 'ASC']
//         ]
//     })
//         .then(producers => {
//             res.render('configs/configindex.ejs', {
//                 producers
//             })
//         })
// }
//POST Producer -create a new NEW Country in the Countries DB table
const postProducer = (req, res) => {
    console.log("bob: ",req.body)
    Producer.create (req.body)
    .then (producer => {
        // res.render ('configs/countryindex.ejs');
        res.redirect('/configs/') 
    })
}
//Delete - remove an existing Producer from the Producers DB table
const deleteProducer = (req, res) => {
    // console.log("bob: ",req.body)
    Producer.destroy ({
        where: {id:req.body.producerId}
    })
    .then (() => {
        res.redirect('/configs/')
    })
}

//POST Country -create a new NEW Country in the Countries DB table
const postProducer = (req, res) => {
    console.log("bob: ",req.body)
    Producer.create (req.body)
    .then (producer => {
        // res.render ('configs/countryindex.ejs');
        res.redirect('/configs/') 
    })
}
//Delete - remove an existing Producer from the Producers DB table
const deleteProducer = (req, res) => {
    // console.log("bob: ",req.body)
    Producer.destroy ({
        where: {id:req.body.producerId}
    })
    .then (() => {
        res.redirect('/configs/')
    })
}

module.exports = {
    countryIndex,
    postCountry,
    deleteCountry,
    producerIndex,
    postProducer,
    deleteProducer,
};