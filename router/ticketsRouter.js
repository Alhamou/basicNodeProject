const express = require("express");
const router = new express.Router();

// ticketsController
const tC = require("../controller/ticketsController");



router.post("/addNewTicket", tC.addNewTicket);
router.post("/getTimeForTesting", tC.getTimeForTesting);


module.exports = router;