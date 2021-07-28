const { Types } = require('../db');

function getAllTypes(req, res, next) {
    Types.findAll()
        .then((response) => res.json(response))
        .catch((err) => next(err));
}

module.exports = {
    getAllTypes,
};