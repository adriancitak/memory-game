import { useState, useEffect } from 'react';
import { shuffleArray, getRandomUniqueIds } from '../utils/helpers'
import Scoreboard from './Scoreboard';
import Card from './Card';

export default function Cards({difficulty}){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [clickedPokemon, setClickedPokemon] = useState([]);
    const [bestScore, setBestScore] = useState(0);
    

    //Calculate the number of characters
    const numOfCharacters = difficulty * difficulty

    
    //Get Pokemon Data
    useEffect(() => {
        const fetchData = async () => {
            const ids = getRandomUniqueIds(numOfCharacters);

            try {
                const responses = await Promise.all(
                    ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()))
                    
                )
                setData(responses)


            } catch (err){
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [difficulty])

    if (loading) return <div>Loading...</div>
    if (!data) return <div>No data</div>
    

    function handleClick(pokemonName){
        // Shuffle the cards with every click
        const shuffled = shuffleArray(data);
        setData(shuffled)

        //Update the score
        if (!clickedPokemon.includes(pokemonName)){
            const newClicked = [...clickedPokemon, pokemonName]
            setClickedPokemon(newClicked)

            //Update Best Score
            if (newClicked.length > bestScore){
                setBestScore(newClicked.length)
            }
        //Reset the score
        } else {
            setClickedPokemon([]);
        }

        

    }


    return (
        <>
            <Scoreboard score={clickedPokemon.length} bestScore={bestScore} />
            <div className='pokemon-cards' 
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${difficulty}, 1fr)`,
                
                }}>
                {data.map(pokemon => (
                    <div key={pokemon.name}>
                       <Card pokemon={pokemon} onClick={handleClick} />
                        
                    </div>
                ))}
            </div>
        </>
    )
}