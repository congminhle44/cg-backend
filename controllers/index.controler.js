const fs = require("fs");

const defaultData = {
  guildboard: "https://meta-heroes.io/#surveice",
  PC001: "https://meta-heroes.io/#company",
  平面: "https://meta-heroes.io/#work",
  平面001: "https://meta-heroes.io/#work",
  bar001: "https://meta-heroes.io/#work",
  "counter-table001": "https://meta-heroes.io/#news",
};

const getLink = (req, res) => {
  if (!fs.existsSync("data.json")) {
    fs.writeFile("data.json", JSON.stringify(defaultData), function (err) {
      if (err) return res.status(400).json(err);
    });
  }
  fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
    if (err) return res.status(400).json(err);
    res.status(200).json(JSON.parse(data));
  });
};

const updateLink = (req, res) => {
  if (!fs.existsSync("data.json")) {
    fs.writeFile("data.json", JSON.stringify(defaultData), function (err) {
      if (err) return res.status(400).json(err);
    });
  }
  fs.readFile("data.json", "utf8", function readFileCallback(err, data) {
    if (err) return res.status(400).json(err);
    const updatedData = { ...JSON.parse(data), [req.params.id]: req.body.link };
    fs.writeFile("data.json", JSON.stringify(updatedData), function (err) {
      if (err) return res.status(400).json(err);
      res.status(200).json(updatedData);
    });
  });
};

module.exports = {
  getLink,
  updateLink,
};
