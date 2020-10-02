import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  constructor( private http: HttpClient) { }

  getPokemon( identificador: string ) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${identificador}`);
  }
}
