const express = require('express');
const feedController = require("../controllers/feed");
const router = express.Router();


router.get("/getProducts", feedController.getProducts);

router.post("/filterbycategory", feedController.filterByCategory);

router.get("/", (req, res) => {
    res.status(200).json({ status: 'Ok' })
});





module.exports = router;