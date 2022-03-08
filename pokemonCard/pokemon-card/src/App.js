import './App.css';
import PokemonCard from './components/PokemonCard.jsx';
import pokemonList from './assets/pokemons.json';

function App() {
  return (
    <div className="App">
      {pokemonList.map((pokemon, idx) => 

        <PokemonCard key={idx} pokemon={pokemon}/>

      )}
    </div>
  );
}

export default App;
