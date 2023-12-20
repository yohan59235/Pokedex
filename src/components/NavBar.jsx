import PropTypes from "prop-types"
import { useState } from "react"

function NavBar({pokemonList, pokemonClick}) {
    
   const handlePokemonClick = (index) => {
        pokemonClick(index)
   
   const selectedPokemon = pokemonList[index].name;
    if(selectedPokemon === "pikachu") {
        alert("Pika Pikachu !!!");
    }
   
    }


    
    return (
        <div>

            {pokemonList.map((pokemon, index) => (
                <button key={index} onClick={() => handlePokemonClick(index)}>{pokemon.name}</button>
            ))}


            {/* <button onClick={returnClick} disabled={PokemonIndex === 0}>Précédent</button>
            <button onClick={handleClick} disabled={PokemonIndex === pokemonListLength - 1}>Suivant</button> */}
        </div>
    )
}


NavBar.propTypes = {
    props: PropTypes.shape({
    returnClick: PropTypes.string,
    handleClick: PropTypes.string,
    PokemonIndex: PropTypes.string,
    pokemonList: PropTypes.string,
})
}






export default NavBar;

