
// const getPokemonById = (id) => {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    
//     return fetch(url).then((response) => 
//         // response.json().then((pokemon) => {
//         //     console.log(pokemon.name);
//         // })
//         response.json())
//         //.then(() => { throw new Error('Pokemon no existe') })
//         .then((pokemon) => (pokemon.name));
// }
const { http } = require( '../plugins' );

const getPokemonById = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await http.get(url);
    // const response = await fetch(url);
    // const pokemon = await response.json();
    return pokemon.name;
}

module.exports = { getPokemonById } 

