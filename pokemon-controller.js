function PokemonController(){

  var pokeElem = document.getElementById('pokemon-results')
  var myPokeElem = document.getElementById('my-pokemon')


  var pkService = new PokemonService()


  this.next = function(direction){

    var cp = pkService.getCurrentPage()

    if(direction == -1){
      pkService.getPokemons(cp.previous, drawAllPokemonList)
    }

    if(direction == 1){
      pkService.getPokemons(cp.next, drawAllPokemonList)
    }

  }


  this.addToMyPokemon = function(pokemonIndex){
    pkService.addPokemon(pokemonIndex)
    drawMyPokemonList()
  }


  function drawAllPokemonList(response){
    pokeElem.innerHTML = ''
    var template = ''

    response.results.forEach((p, i) => {
      template += `
        <div>${p.name} <button onclick="pokeCtrl.addToMyPokemon(${i})">ADD TO ROSTER</button> </div>
      `
    })
    pokeElem.innerHTML = template
  }

  function drawMyPokemonList(){
    var pokemon = pkService.getMyPokemon()
    myPokeElem.innerHTML = ''
    var template = ''

    pokemon.forEach((p) => {
      template += `
        <div>${p.name}</div>
      `
    })
    myPokeElem.innerHTML = template
  }


  console.log('GETTING POKEMONS')
  pkService.getPokemons('http://pokeapi.co/api/v2/pokemon', drawAllPokemonList)

  drawMyPokemonList()


}