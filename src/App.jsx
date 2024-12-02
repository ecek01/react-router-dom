import { useState } from 'react';
import PokemonList from './components/PokemonList';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokemonForm from './components/PokemonForm';

const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  // Function to add a new Pokemon
  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1; // Assign a unique ID
    setPokemon([...pokemon, newPokemonData]); // Add new Pokemon to the list
  };

  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <PokemonList pokemon={pokemon} />
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route
          path="/pokemon/new"
          element={<PokemonForm addPokemon={addPokemon} />}
        />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
      </Routes>
    </>
  );
};

export default App;
