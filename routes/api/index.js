const router = require("express").Router();
const orderRoutes = require("./order");
const categoryRoutes = require("./categories")
const pinRoutes = require("./pin")

// Book routes
router.use("/order", orderRoutes);
router.use("/categories", categoryRoutes)
router.use("/pin", pinRoutes)

module.exports = router;