import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.sass']
})
export class FavoritosComponent implements OnInit {
  misPokemons: PokemonModel[] = [];

  constructor( private pokemonServices: PokemonServiceService) { }

  ngOnInit() {
    this.misPokemons = this.pokemonServices.obtenerTodos();
  }

  eliminarPokemon( pokemon: PokemonModel){
    console.log('elimina', pokemon.nombre);
    this.misPokemons = this.pokemonServices.eliminar(pokemon);
  }

}
