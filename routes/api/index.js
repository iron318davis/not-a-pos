const router = require("express").Router();
const orderRoutes = require("./order");
const categoryRoutes = require("./categories")

// Book routes
router.use("/order", orderRoutes);
router.use("/categories", categoryRoutes)

module.exports = router;