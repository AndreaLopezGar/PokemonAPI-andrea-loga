import { Component } from './component';
import { PokemonData } from '../models/pokemon';
import { ApiPokemon } from '../data/api.repo';

export class Card extends Component {
  pokemon!: PokemonData[][];
  repository: ApiPokemon;

  offset!: number;
  constructor(selector: string) {
    super(selector);
    this.pokemon = [];
    this.repository = new ApiPokemon();
    this.offset = 0;
    this.handleLoadEach();
  }

  render() {
    super.clear();
    this.template = this.createTemplate();
    super.render();
  }

  async handleLoadEach() {
    this.pokemon = await this.repository.getEachPokemon();
    this.render();
  }

  createTemplate() {
    const pokeList = this.pokemon.map((pokemonPage) =>
      pokemonPage.map(
        (pokemon) => `
          <li>
            <p class="id">🎃${pokemon.id}</p>
            <p class="name" </p>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif" height="80" width="60">
            <p class="name">${pokemon.name}</p>
          </li>`
      )
    );
    return `
      <ul>${pokeList[this.offset].join('')}</ul>
      `;
  }
}
