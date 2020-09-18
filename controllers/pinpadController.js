const db = require("../models");
const sequelize = require("sequelize");

// Defining methods for the booksController
module.exports = {
    findOne: function (req, res) {
        console.log(req)
        console.log("Hit pinpadController by entered pin" + req.params.id)
        var query = { pin: req.params.id };
        db.Employees
            .findOne({ where: query })
            .then(function (dbModel) {
                res.json(dbModel)
                console.log("HIT pinpadController THEN" + dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
};