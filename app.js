const path = require("path");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("public/css"));
// app.use(express.static("node_modules/bootstrap/dist/css"));
// app.use(
//   "/css",
//   express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
// );
app.use(
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

// Configure Express for EJS
// app.engine("html", ejs.renderFile);
// app.set("view engine", "html");
// app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public/images"));
// app.use(express.static("public/css"));
app.use(express.json());

const driverRouter = require("./routes/driver.router");
const packageRouter = require("./routes/package.router");
const errorRouter = require("./routes/error.router");
const { url, links } = require("./data");

app.get(`${url}/`, (req, res) => {
  console.log(req.path);
  res.render("index", { url, links, currentPath: req.path });
});

app.use(url, driverRouter);
app.use(url, packageRouter);
app.use(`*`, errorRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
