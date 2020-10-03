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
    const stringPokemons = JSON.stringify(this.misPokemons);
    localStorage.setItem('misPokemons', stringPokemons);
  }

  eliminar( pokemon: PokemonModel) {

  }

  obtenerTodos() {
    this.leerLocalStorage();
    return this.misPokemons;
  }
}
