import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import PokemonComponent from './components/PokemonComponent';
import { Pokemon } from './models/Pokemon';
import { PokeApi } from './api/PokeApi';
import Busqueda from './components/Pokedex/Busqueda';
function App() {
  

  return (
    <div className="App">
      <Busqueda></Busqueda>
    </div>
  );
}

export default App;
