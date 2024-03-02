import Button from '../../components/Button';
import PokemonComponent from '../../components/PokemonComponent';
import { Pokemon } from '../../models/Pokemon';
import { PokeApi } from '../../api/PokeApi';
import React from 'react';
import "./Busqueda.css"

function Busqueda(){
  const [pokemonName, setPokemonName] = React.useState('');
  const [pokemon, setPokemon] = React.useState<Pokemon|null>(null);
  const buttons = [];
  for (let i = 0; i <= 9; i++) {
    buttons.push(
      <Button color='green' label={`${i}`} onClick={() => addToBusqueda(`${i}`)}></Button>
    );
  }

  function buscar(){
    console.log("buscar")
    PokeApi.getPokemonById(pokemonName).then((response) => {
      setPokemon(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  const clearBusqueda = () => {
    setPokemonName('');
    setPokemon(null);
  };

  // Añade el número al estado pokemonName
  const addToBusqueda = (numero: string) => {
    setPokemonName(prev => prev + numero);
  }

  return (
    <div className="Pokedex">
      <div className='SearchBoxFrame'>
        <input className='SearchBox' type="text" value={pokemonName} onChange={(e) => setPokemonName(e.target.value)}></input>
        <Button onClick={() => buscar()} color='blue' label='Buscar'></Button>
        <Button onClick={() => clearBusqueda()} color='blue' label='Borrar'></Button>
        <div className='SearchButtons'>
          {buttons}
        </div>
      </div>
      {pokemon && 
        <PokemonComponent pokemon={pokemon}></PokemonComponent>
      }
    </div>
  );
}

export default Busqueda;
