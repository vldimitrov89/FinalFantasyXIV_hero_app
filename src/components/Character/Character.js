import { useState } from 'react';
import Button from '@material-ui/core/Button';
import CharacterInfo from './CharacterInfo';

const Character = function() {
    const [ characterData, setCharacterData] = useState({});
    
    function getCharacterHandler() {

        fetch('https://xivapi.com/character/7051653')
        .then(response => response.json())
        .then(data => setCharacterData(data.Character));
        
    }
    
    return (
        <div>
            <Button variant="contained" color="primary" onClick={getCharacterHandler}>Character</Button>
            {Object.keys(characterData).length > 0 && characterData.constructor === Object && <CharacterInfo characterData={characterData} />}
        </div>
    );
        
        
}

export default Character;