export default function Card({pokemon, onClick}){

    const pokemonName = pokemon.name.toUpperCase()[0] + pokemon.name.slice(1)


    return (
        <button onClick={() => onClick(pokemon.name)}>
           <img alt={`The default picture for ${pokemon.name}`}
           src={pokemon.sprites.other['official-artwork'].front_default}
                            style={{width: '100%',
                                    height: 'auto',
                                    objectFit: 'contain'
                            }}/>
            <p>{pokemonName}</p>
        </button>
    )
}