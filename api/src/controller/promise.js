const axios = require("axios");
const {
  API_HOME,
  SERVER_URL,
  SERVER_PORT,
  LIMIT_OF_POKEMONS,
} = require("../routes/constant");

function nameExists(name) {
  return axios
    .get(`${SERVER_URL}:${SERVER_PORT}/pokemons?limit=${LIMIT_OF_POKEMONS}`)
    .then((response) => response.data)
    .then((allNames) => allNames.find((el) => el.name === name))
    .catch((err) => console.error(err));
}

function promisifiedGetApi() {
  return axios
    .get(`${API_HOME}?limit=${LIMIT_OF_POKEMONS}`)
    .then((response) => response.data.results)
    .then((listPokemons) => {
      listPokemons.forEach((pokemon) => {
        pokemon.id = pokemon.url.slice(34, -1);
      });
      return listPokemons;
    })
    .catch((err) => console.error(err));
}

module.exports = {
  nameExists,
  promisifiedGetApi,
};