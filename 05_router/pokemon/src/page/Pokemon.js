import { useState, useEffect } from 'react';
function Pokemon() {

    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${}`)
            .then(res => res.json())
            .then(data => {
                setPokemonList(data.results);
            })
    }, [])

    return (
        <div>
            <h1>포켓몬 리스트</h1>
            {pokemonList.map(pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon} />)}
        </div>
    );
}

export default Pokemon;