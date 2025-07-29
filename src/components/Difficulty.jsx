export default function Difficulty({difficulty, setDifficulty}){

    function handleChange(e){
        setDifficulty(e.target.value);
    }


    return (
        <div style={{marginLeft: '1rem', marginBottom: '0.25rem'}}>
            <label>Choose Difficulty</label>
            <select value={difficulty} onChange={handleChange}>
                <option value="4">4x4</option>
                <option value="5">5x5</option>
                <option value="6">6x6</option>
            </select>
        </div>
    )   
}