const randomDigit = () => {
  return Math.floor(Math.random() * 10);
};

const randomUppercase = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

const generateDriverId = () => {
  let id = "D";
  for (let i = 0; i < 2; i++) {
    id += randomDigit();
  }
  id += "-62-";
  for (let i = 0; i < 3; i++) {
    id += randomUppercase();
  }

  return id;
};

const generatePackageId = () => {
  let id = "P";
  for (let i = 0; i < 2; i++) {
    id += randomUppercase();
  }
  id += "-NA-";
  for (let i = 0; i < 3; i++) {
    id += randomDigit();
  }

  return id;
};

module.exports = { generateDriverId, generatePackageId };
