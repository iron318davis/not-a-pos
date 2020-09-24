const db = require("../models");
const sequelize = require("sequelize");


// Defining methods for the ordersController
module.exports = {
  findAll: function(req, res) {
    // db.sequelize.query('SELECT * from pos_db.order where ordercooked = 0 AND actualorderID IN (SELECT min(actualorderID) FROM pos_db.order where ordercooked = 0)')
    db.sequelize.query('SELECT * from `vl2bu9xmqqsydfa6`.`Order` where ordercooked = 0 AND actualorderID IN (SELECT min(actualorderID) FROM `vl2bu9xmqqsydfa6`.`Order` where ordercooked = 0)')
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err),
        res.send(err)
      });
  },

  create: function(req, res) {
    db.Order
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  setOrderCooked: function(req, res) {
    // db.sequelize.query('update pos_db.order set ordercooked = 1 where ordercooked = 0 and actualorderID = ?',
    db.sequelize.query('update `vl2bu9xmqqsydfa6`.`Order` set ordercooked = 1 where ordercooked = 0 and actualorderID = ?',
    {
      replacements: [req.params.id]
    } )
    .then(dbModel => res.json(dbModel)) 
      .catch(err => {
        console.log(err),
        res.send(err)
      });
  }

};