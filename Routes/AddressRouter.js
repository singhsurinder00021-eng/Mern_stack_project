const express = require("express");
const router = express.Router();

const { addAddress, getAddress } = require("../Controllers/AddressController");

router.post("/", addAddress);
router.get("/:userId", getAddress);

module.exports = router;