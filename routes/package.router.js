const express = require("express");
const router = express.Router();
const {
  url,
  links,
  drivers,
  packages,
  packageTableHeader,
} = require("../data");

router.get("/add-package", (req, res) => {
  res.render("add-package", { url, links, drivers });
});

router.get("/list-packages", (req, res) => {
  res.render("list-packages", { url, links, packages, packageTableHeader });
});

router.get("/delete-package", (req, res) => {
  res.render("delete-package", { url, links });
});

module.exports = router;
