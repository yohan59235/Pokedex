import './App.css'
import PokemonCard from "./components/PokemonCard";
import {useState} from "react";


function App() {
  const [PokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    if (PokemonIndex < pokemonList.length - 1){
    setPokemonIndex(PokemonIndex => PokemonIndex + 1)
  }
};
  const returnClick = () => {
    if (PokemonIndex > 0) {
  setPokemonIndex(PokemonIndex => PokemonIndex - 1)
  }
}

  console.log(PokemonIndex)
  

  return (
    <div>
      <PokemonCard pokemon={pokemonList[PokemonIndex]}/>
      <button onClick={returnClick} disabled={PokemonIndex === 0}>Précédent</button>
      <button onClick={handleClick} disabled={PokemonIndex === pokemonList.length - 1}>Suivant</button>
    </div>
  );
}

export default App;


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];