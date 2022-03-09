import './App.css';
import PokemonCard from './components/PokemonCard.jsx';
import pokemonList from './assets/pokemons.json';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny'

function App() {
  return (
    <div className="App">
      {pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon}/>)}
      <OnionHater/>
      <Destiny/>
    </div>
  );
}

export default App;
