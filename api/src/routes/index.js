const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokesRouter = require('./pokes.js');
const typeRouter = require('./types.js');
const router = Router();


router.use('/pokes', pokesRouter);
router.use('/types', typeRouter);


module.exports = router;
