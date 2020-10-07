const db = require("../models");
const sequelize = require("sequelize");

// Defining methods for the booksController
module.exports = {
    findOne: function (req, res) {
        console.log(req)
        console.log("Hit pinpadController by entered pin" + req.params.id)
        // var query = { pin: req.params.id };
        db.sequelize.query('Select * from `vl2bu9xmqqsydfa6`.`Employees` where pin = ?',
            {
            replacements: [req.params.id]
          } )
            // .findOne({ where: query })
            .then(function (dbModel) {
                res.json(dbModel)
                console.log("HIT pinpadController THEN" + dbModel)
            })
            .catch(err => {
                console.log(err),
                res.send(err)});
    }
};