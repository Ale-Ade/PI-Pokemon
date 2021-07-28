const { Router } = require("express");
const router = Router();
const { getAllTypes } = require("../controller/Types");

router.get("/", getAllTypes);

module.exports = router;