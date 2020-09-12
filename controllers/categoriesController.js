const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
      console.log("Hit categoriesController" + req)
      var query = {};
    db.Categories
      .findAll({where: query})
      .then(function(dbModel) 
      { 
        res.json(dbModel)
        console.log("HIT categoriesController THEN" + dbModel)
      })
      .catch(err => res.status(422).json(err));
  },


  findByID: function(req, res) {
    console.log("Hit categoriesController findByID" + req.params.id)
    var query = {categoryID: req.params.id};
    db.Menu
      .findAll({where: query})
      .then(function(dbModel) 
      { 
        res.json(dbModel)
        console.log("HIT categoriesController THEN" + dbModel)
      })
      .catch(err => res.status(422).json(err));
  }


                    //   create: function(req, res) {
                    //     db.Order
                    //       .create(req.body)
                    //       .then(dbModel => res.json(dbModel))
                    //       .catch(err => res.status(422).json(err));
                    //   }
//   update: function(req, res) {
//     db.Book
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};