import { Component, OnInit } from '@angular/core';
import { PokemonModel } from 'src/app/models/pokemon.model';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  pokemon: PokemonModel;

  constructor( private pokemonService: PokemonServiceService) { 
    this.pokemon = new PokemonModel();
  }

  ngOnInit() {
    this.searchPokemon('80');
  }

  searchPokemon( identificador: string ) {
    this.pokemonService.getPokemon(identificador).subscribe( resp => {
      console.log(resp);
      this.pokemon.nombre = resp['name'];
      this.pokemon.numero =  resp['id'];
      this.pokemon.tipos = resp['types'];
      console.log(this.pokemon.tipos);
    });
  }

}
