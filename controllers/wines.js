const Wine = require('../models').Wine;
const Country = require('../models').Country;
const Producer = require('../models').Producer;
const Seller = require('../models').Seller;
const Note = require('../models').Note;
const NoteWine = require('../models').NoteWine;

//Index Route
const index = (req, res) => {
    Wine.findAll({
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
    })
        .then(wines => {
            res.render('wines/index.ejs', {
                wines: wines,
            })
        })
}

        // const index = (req, res) => {
        //     Wine.findAll()
        //         .then(wines => {
        //             res.render('wines/index.ejs', {
        //                 wines: wines,
        //         })
        //     })
        // }

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
            model: Note,
        },
        {
            model: Seller,
        }
        ],

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
        include: [{
            model: Country
        },
        {
            model: Producer,
        },
        {
            model: Note,
        },
        {
            model: Seller,
        }
        ],
    })
    .then (wine => {
        Country.findAll()
        .then (allCountries => {
            Producer.findAll()
            .then (allProducers => {
                Note.findAll()
                .then(allNotes => {
                    Seller.findAll()
                    .then(allSellers => {
                        let wineNoteIds = wine.Notes.map((n) => n.id);
                        res.render ('wines/edit.ejs', {
                            wine: wine,
                            country: allCountries,
                            producer: allProducers,
                            note: allNotes,
                            seller: allSellers,
                            wineNoteIds
                    })
                })
            })
        })        
        })
    })
}
//     .then (wine => {
//         res.render ('wines/edit.ejs', {
//             wine: wine
//         })
//     })
// }

//PUT function -- execute PUT method to update an existing wine changed from the renderEdit page in the Wines DB table
const editWine = (req, res) => {
    let wineNoteIds = req.body.wineNoteIds.split(',');
    console.log(req.body)
    Wine.update (req.body, {
        where: {id: req.params.index, },
        returning: true,
    })
   
    // .then(wine => {
//    console.log("Bob: ",wine)
        // Note.findByPk(req.body.noteId)
        // .then (foundNote => {
        //     console.log("Bob" + foundNote)
        //     Wine.findByPk(req.params.index,
        //         {
        //             include: [{
        //                 model: Country
        //             },
        //             {
        //                 model: Producer,
        //             },
        //             {
        //                 model: Note,
        //             },
        //             {
        //                 model: Seller,
        //             }
        //             ],
        //         })
        .then((updatedWine) => {
            wineNoteIds.forEach((n) => {
              NoteWine.destroy({ where: { noteId: n } });
            });
            req.body.notes.forEach((n) => {
              NoteWine.create({ noteId: n, wineId: req.params.index });
            });
          });
          res.redirect('/wines');
        
            // .then(foundWine => {
            //     console.log("Bob:" + foundWine.Notes[0])
            //     foundWine.addNote(foundNote)
            //     res.render ('wines/show.ejs/' , {
            //         wine: foundWine,
            //     })
            // })
        // })
    // })
    // .then (wine => {
    //     res.redirect ('/wines')
    // })
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