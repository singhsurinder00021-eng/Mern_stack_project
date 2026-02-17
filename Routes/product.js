const express = require("express");
const router = express.Router();
const EnsureAuthenticated =require("../MiddleWare/Auth")


router.get("/",EnsureAuthenticated, (req, res) => {
    console.log('---logged in user detail ----',req.user);
  res.status(200).json([
    {
        name:"mobil",
        price:100000,

    },
        {
        name:"tv",
        price:300000,

    },
        {
        name:"led",
        price:700000,

    },
  ])
});

module.exports = router;
