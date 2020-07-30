const { Router } = require("express");
const router = new Router();
const User = require("../user/model");
const db = require("../db.js");

router.put("/image", function (req, res, next) {
  const { id } = req.body;
  User.increment({ entries: 1 }, { where: { id: id } })
    .then((data) => {
      // console.log("Data put image", data[0]);
      res.json(data[0]);
    })
    .catch((error) => next(error));
});

module.exports = router;
