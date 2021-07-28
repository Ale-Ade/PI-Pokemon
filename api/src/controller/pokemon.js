const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { API_HOME } = require('../routes/constant');
const { nameExists, promisifiedGetApi } = require('./promise');

function getAllPokes(req, res, next) {
    const { name, limit = 12, filter = null } = req.query;
    const pokeApiProps = promisifiedGetApi();
    const pokeMine = Pokemon.findAll({ include: Type });

    Promise.all([pokeApiProps, pokeMine])
        .then((response) => {
            let [pokeApiRes, pokeMineRes] = response;
            return pokeApiRes.concat(pokeMineRes);
        })
        .then((pokeList) => {
            if (name) {
                const hasPokemon = pokeList.find(
                    (pokemon) => pokemon.name === name.toLowerCase()
                );
                return hasPokemon
                    ? res.json(hasPokemon)
                    : next({
                          status: 404,
                          message: 'That pokemon does not exists.',
                      });
            }

            if (filter === 'byUsers') {
                pokeList = pokeList.filter(
                    (el) => !Number.isInteger(Number(el.id))
                );
            }

            if (filter === 'byApi') {
                pokeList = pokeList.filter((el) =>
                    Number.isInteger(Number(el.id))
                );
            }

            const limitedList = pokeList.slice(0, limit);
            return res.json(limitedList);
        })
        .catch((err) => console.log(err));
}

function getPokemonId(req, res, next) {
    const id = req.params.idPokemon;
    const isNumber = /^[0-9]+$/.test(id);
    const isUUID = /[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89aAbB][a-f0-9]{3}-[a-f0-9]{12}/.test(
        id
    );
    if (isNumber) {
        return axios
            .get(`${API_HOME}/${id}`)
            .then((response) => res.json(response.data))
            .catch(() =>
                next({ status: 404, message: '404 - Pokemon not found.' })
            );
    }
    if (isUUID) {
        return Pokemon.findOne({ where: { id }, include: { model: Type } })
            .then((response) => res.json(response))
            .catch(() =>
                next({ status: 404, message: '404 - Pokemon not found.' })
            );
    }
    return next({
        status: 404,
        message: 'That pokemon does not exist for now.',
    });
}

async function addPokemon(req, res, next) {
    let name = req.body.name.toLowerCase();
    const {
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        types,
        sprite,
        
    } = req.body;
    if (!name) return next('No hay nombre.');
    try {
        const hasName = await nameExists(name);
        if (hasName) return res.json({ message: 'That name already exists' });
        const newPokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            sprite,
            
        });
        newPokemon.setTypes(types);
        console.log(newPokemon);
        return res.redirect(
            201,
            `http://localhost:3000/pokemon/${newPokemon.dataValues.id}`
        );
    } catch (err) {
        console.error(err);
        next(err);
    }
}

module.exports = {
    getAllPokes,
    getPokemonId,
    addPokemon,
  };
  