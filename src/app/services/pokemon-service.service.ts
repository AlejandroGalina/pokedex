import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from '../models/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  misPokemons: PokemonModel[] = [];

  constructor( private http: HttpClient) {


  }

  getPokemon( identificador: string ) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${identificador}`);
  }

  leerLocalStorage() {
    if ( localStorage.getItem('misPokemons') == null ) {
    } else {
      this.misPokemons = JSON.parse(localStorage.getItem('misPokemons'));
    }
  }

  agregar( pokemon: PokemonModel) {
    this.leerLocalStorage();
    this.misPokemons.push(pokemon);
    this.setLocalStorage(this.misPokemons);
  }

  eliminar( pokemon: PokemonModel) {
    this.leerLocalStorage();
    this.misPokemons.forEach( (poke, index) => {
        if( pokemon.numero === poke.numero) {
          console.log(index);
          this.misPokemons.splice(index, 1);
        }
    });
    this.setLocalStorage(this.misPokemons);
    return this.misPokemons;
  }

  setLocalStorage( pokemons ) {
    const stringPokemons = JSON.stringify(pokemons);
    try {
      localStorage.setItem('misPokemons', stringPokemons);
      window.alert('accion realizada con éxito');
    } catch(e) {
      window.alert('algo salió mal, intenta nuevamente');
    }
  }

  obtenerTodos() {
    this.leerLocalStorage();
    return this.misPokemons;
  }
}
