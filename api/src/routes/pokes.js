const router = require('express').Router();
const {
    getAllPokes,
    getPokemonId,
    addPokemon,
} = require('../controller/pokemon');

router.get('/', getAllPokes);
router.get('/:idPokemon', getPokemonId);
router.post('/', addPokemon);

module.exports = router;