function PokemonService(){

  var baseurl = 'http://pokeapi.co/api/v2/'
  var currentPage = null
  
  var myPokemon = [{name: 'FAKE POKE 1'}, {name: 'FAKE POKE 2'}]


  this.addPokemon = function(pokemon){
    myPokemon.push(pokemon)
  }

  this.getMyPokemon = function(){
    return myPokemon.slice(0, myPokemon.length)
  }


  this.getCurrentPage = function(){
    return currentPage
  }


  this.getPokemons = function(url, cb){
    if(!url){
      return console.error('UMM WAT do you want to do with that which is nothing see', url)
    }
    if(typeof cb != 'function'){
      return console.error('YOU SHALL NOT PASS.... without a function')
    }
    $.get(url).then(function(res) {
      currentPage = res;
      cb(res)
    })
  }



}