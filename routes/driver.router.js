const express = require("express");
const router = express.Router();
const { url, links } = require("../data");

// router.engine("html", require("ejs").renderFile);
// router.set("view engine", "html");

router.get("/add-driver", (req, res) => {
  res.render("add-driver", { url, links });
});

router.get("/list-drivers", (req, res) => {
  res.render("list-drivers", { url, links });
});

router.get("/delete-driver", (req, res) => {
  res.render("delete-driver", { url, links });
});

module.exports = router;
