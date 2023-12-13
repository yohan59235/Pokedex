import PropTypes from "prop-types"
import { useState } from "react"

function NavBar({handleClick, returnClick, PokemonIndex, pokemonListLength}) {
    return (
        <div>
            <button onClick={returnClick} disabled={PokemonIndex === 0}>Précédent</button>
            <button onClick={handleClick} disabled={PokemonIndex === pokemonListLength - 1}>Suivant</button>
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


