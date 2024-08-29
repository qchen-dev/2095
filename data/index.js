const url = "/123/abc";

const links = [
  "home",
  "add driver",
  "list drivers",
  "delete driver",
  "add package",
  "list packages",
  "delete package",
];

const departments = ["Food", "Furniture", "Electronic"];

const driverTableHeader = [
  "#Id",
  "Name",
  "Department",
  "Licence",
  "Is Active?",
  "Created At",
  "Delete?",
];

const packageTableHeader = [
  "#Id",
  "Title",
  "Weight",
  "Destination",
  "Description",
  "Is Allocated",
  "Driver Id",
  "Created At",
  "Delete?",
];

const drivers = [];
const packages = [];

module.exports = {
  url,
  links,
  departments,
  drivers,
  packages,
  driverTableHeader,
  packageTableHeader,
};
