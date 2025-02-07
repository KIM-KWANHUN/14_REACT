import {NavLink} from 'react-router-dom';
function PokemonItem({pokemon}) {
    return(
        <NavLink>
            <h1>번호 : {pokemon.id}</h1>
            <h1>이름 : {pokemon.name}</h1>
            <img src={pokemon.sprites.front_default}/>
        </NavLink>
    );
}

export default PokemonItem;