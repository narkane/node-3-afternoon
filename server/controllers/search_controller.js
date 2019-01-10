const swag = require("../models/swag");

module.exports = {
  search: (req, res, next) => {
    const { category } = req.query;

    if (category) {
      const filtSwag = swag.filter(elm => elm.category === category);
      res.status(200).send(filtSwag);
    } else {
      res.status(200).send(swag);
    }
  }
};
