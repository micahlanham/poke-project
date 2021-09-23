const PokeApi = require('pokeapi');
const api = PokeApi.v1();

api.get('pokemon', 1).then(function(bulbasaur) {
    console.log("Here's Bulbasaur:", bulbasaur);
	api.get(bulbasaur.moves).then(function(moves) {
	    console.log("Full move list:" + moves);
    })
}, function(err) {
    console.log('ERROR', err);
});