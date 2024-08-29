const express = require("express");
const router = express.Router();
const Driver = require("../models/driver");
const { generateDriverId } = require("../utils");
const {
  departments,
  drivers,
  url,
  links,
  driverTableHeader,
} = require("../data");

router.get("/add-driver", (req, res) => {
  res.render("add-driver", { departments, url, links });
});

router.get("/list-drivers", (req, res) => {
  res.render("list-drivers", { url, links, drivers, driverTableHeader });
});

router.get("/delete-driver", (req, res) => {
  const id = req.query.id;

  if (id) {
    const idx = drivers.findIndex((driver) => driver.id === id);
    if (idx !== -1) {
      drivers.splice(idx, 1);
      res.render("list-drivers", { url, links, drivers, driverTableHeader });
    } else {
      res.redirect("error");
    }
  } else {
    res.render("delete-driver", { url, links });
  }
});

router.post("/driver", (req, res) => {
  console.log(req.body, "xxx");
  const { driverId } = req.body;

  if (driverId) {
    if (deleteDriver(driverId)) {
      res.redirect(`${url}/list-drivers`);
    } else {
      return res.redirect("error");
    }
  } else {
    const { name, department, licence, active } = req.body;
    if (!name || !department || !licence || !active) {
      return res.redirect("error");
    }

    const id = generateDriverId();
    const isActive = active ? true : false;
    const createAt = Date.now().toString();
    const driver = new Driver(
      id,
      name,
      department,
      licence,
      isActive,
      createAt
    );
    console.log("driver:", driver);
    drivers.push(driver);
    res.redirect(`${url}/list-drivers`);
  }
});

router.get("/delete-driver", (req, res) => {
  res.redirect(`${url}/list-drivers`);
});

const deleteDriver = (id) => {
  const index = drivers.findIndex((driver) => driver.id === id);
  console.log("index =", index);
  if (-1 !== index) {
    drivers.splice(index, 1);
    return 1;
  } else {
    return 0;
  }
};

module.exports = router;
