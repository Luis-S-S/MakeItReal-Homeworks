import './App.css';
import PokemonCard from './components/PokemonCard.jsx';
import pokemonList from './assets/pokemons.json';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny'
import Clock from './components/Clock';
import CalculateSalary from './components/Salary';

function App() {
  return (
    <div className="App">
      {pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon}/>)}
      <OnionHater/>
      <Destiny/>
      <Clock/>
      <CalculateSalary/>
    </div>
  );
}

export default App;
