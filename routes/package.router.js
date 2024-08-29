const express = require("express");
const router = express.Router();
const { url, links } = require("../data");

router.get("/add-package", (req, res) => {
  res.render("add-package", { url, links });
});

router.get("/list-packages", (req, res) => {
  res.render("list-packages", { url, links });
});

router.get("/delete-package", (req, res) => {
  res.render("delete-package", { url, links });
});

module.exports = router;
