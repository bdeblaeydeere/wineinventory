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

//POST Seller -create a new NEW Seller in the Sellers DB table
const postSeller = (req, res) => {
    // console.log("bob: ",req.body)
    Seller.create (req.body)
    .then (seller => {
        // res.render ('configs/countryindex.ejs');
        res.redirect('/configs/') 
    })
}
//Delete - remove an existing Seller from the Sellers DB table
const deleteSeller = (req, res) => {
    // console.log("bob: ",req.body)
    Seller.destroy ({
        where: {id:req.body.sellerId}
    })
    .then (() => {
        res.redirect('/configs/')
    })
}

//POST Notes -create a new NEW Note in the Notes DB table
const postNote = (req, res) => {
    console.log("bob: ",req.body)
    Note.create (req.body)
    .then (note => {
        res.redirect('/configs/') 
    })
}
//Delete - remove an existing Note from the Notes DB table
const deleteNote = (req, res) => {
    console.log("bob: ",req.body)
    Note.destroy ({
        where: {id:req.body.noteId}
    })
    .then (() => {
        res.redirect('/configs/')
    })
}

module.exports = {
    countryIndex,
    postCountry,
    deleteCountry,
    postProducer,
    deleteProducer,
    postSeller,
    deleteSeller,
    postNote,
    deleteNote,
};