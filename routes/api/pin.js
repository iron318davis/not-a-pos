const router = require("express").Router();
const pinpadController = require("../../controllers/pinpadController");

// Matches with "/api/books"
// router.route("/")
// //   .get(ordersController.findAll)
//   .post(pinpadController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(pinpadController.findOne)
//   .put(ordersController.update)
//   .delete(ordersController.remove);

module.exports = router;