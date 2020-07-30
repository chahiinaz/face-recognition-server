const { Router } = require("express");
const router = new Router();
const User = require("../user/model");

router.get("/profile/:id", function (req, res, next) {
  const { id } = req.params;
  User.findAll({ where: { id: id } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => next(error));
});

module.exports = router;
