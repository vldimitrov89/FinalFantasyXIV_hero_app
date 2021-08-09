import { useState } from 'react';
import { Button, Backdrop, CircularProgress } from '@material-ui/core';
import CharacterInfo from './CharacterInfo';

const Character = function() {
    const [ characterData, setCharacterData] = useState({});
    const [ isLoading, setIsLoading] = useState(false);
    
    function getCharacterHandler() {
        setIsLoading(true);
        fetch('https://xivapi.com/character/7051653')
        .then(response => response.json())
        .then(data => {
            setCharacterData(data.Character);
            setIsLoading(false);
        });
        
    }
    
    return (
        <div>
            <Button variant="contained" color="primary" onClick={getCharacterHandler}>Character</Button>
            <br />
            <br />
            {Object.keys(characterData).length > 0 && characterData.constructor === Object && <CharacterInfo characterData={characterData} />}

            <Backdrop open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
        
        
}

export default Character;