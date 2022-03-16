import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import PokemonCard from './components/PokemonCard.jsx';
import pokemonList from './assets/pokemons.json';
import OnionHater from './components/OnionHater';
import Destiny from './components/Destiny'
import Clock from './components/Clock';
import CalculateSalary from './components/Salary';
import rickMorty from './assets/rick-and-morty.json';
import RickAndMorty from './components/RickAndMorty';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={pokemonList.map((pokemon, idx) => <PokemonCard key={idx} pokemon={pokemon}/>)} />
          <Route path="/OnionHater" element={<OnionHater/>} />
          <Route path="/Destiny" element={<Destiny/>} />
          <Route path="/Clock" element={<Clock/>} />
          <Route path="/CalculateSalary" element={<CalculateSalary/>} />
          <Route path="/RickAndMorty" element={rickMorty.map((item, idx) => <RickAndMorty key={idx} item={item}/>)} />
          <Route path="/ToDoList" element={<ToDoList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
