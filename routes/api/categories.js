const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");

// Matches with "/api/books"
// SHOULD GO TO DB AND GET EVERYTHING FROM CATEGORIES TABLE
router.route("/")
  .get(categoriesController.findAll)
//   .post(categoriesController.create);

// Matches with "/api/books/:id"
// USE TO GET CATEGORY/:MENU?
// COULD ALSO BE CATEGORY/:MENUS DEPENDING ON HOW WE DO DATABASE
router
  .route("/:id")
//   .get(categoriesController.findById)
//   .put(categoriesController.update)
//   .delete(categoriesController.remove);

module.exports = router;