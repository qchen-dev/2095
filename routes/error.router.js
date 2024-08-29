const express = require("express");
const router = express.Router();
const { url, links } = require("../data");

router.get("/", (req, res) => {
  res.render("error", { url, links });
});

module.exports = router;
