import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    // this.searchPokemon('80');
  }

  buscarFormulario( f: NgForm ) {
    this.searchPokemon(f.value.identificador);
  }

  searchPokemon( identificador: string ) {
    this.pokemonService.getPokemon(identificador).subscribe( resp => {
      console.log(resp);
      this.pokemon.nombre = resp['name'];
      this.pokemon.numero =  resp['id'];
      this.pokemon.tipos = resp['types'];
      this.pokemon.img = resp['sprites']['front_default'];
    });
  }

}
