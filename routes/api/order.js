const router = require("express").Router();
const ordersController = require("../../controllers/ordersController");

// Matches with "/api/books"
router.route("/")
  .get(ordersController.findAll)
  .post(ordersController.create)
  // .put(ordersController.setOrderCooked);

// Matches with "/api/books/:id"
router
  .route("/:id")
//   .get(ordersController.findById)
//   .put(ordersController.update)
//   .delete(ordersController.remove);
  .put(ordersController.setOrderCooked);

module.exports = router;