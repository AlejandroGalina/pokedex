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
  pokemonSelected = false;

  constructor( private pokemonService: PokemonServiceService) {
    this.pokemon = new PokemonModel();
  }

  ngOnInit() {
    // this.searchPokemon('80');
  }

  buscarFormulario( f: NgForm ) {
    this.searchPokemon(f.value.identificador);
  }

  capturarPokemon( pokemon: PokemonModel) {
    if ( !this.pokemonSelected ) {
      window.alert('primero busca el pokemón que deseas capturar');
      return;
    }
    this.pokemonService.agregar(pokemon);
  }

  searchPokemon( identificador: string ) {
    // tslint:disable-next-line: radix
    const n = parseInt(identificador);
    if ( !identificador ) {
      window.alert('Al parecer aún has ingresado información de pokémon');
      return;
    }
    if ( n > 994 || n <= 0) {
      window.alert('favor de elegir un pokemon entre 1 y 890 que son los  existentes ');
      return;
    }
    this.pokemonSelected = true;
    this.pokemonService.getPokemon(identificador).subscribe( resp => {
      console.log(resp);
      this.pokemon.nombre = resp['name'];
      this.pokemon.numero =  resp['id'];
      this.pokemon.tipos = resp['types'];
      this.pokemon.img = resp['sprites']['front_default'];
    }, err => {
        window.alert('No se encontró registro, favor de verificar que no haya errores en la búsqueda');
    }
    );
  }
}
