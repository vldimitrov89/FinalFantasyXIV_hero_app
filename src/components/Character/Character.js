import React from 'react';
import Button from '@material-ui/core/Button';

const Character = function() {

    function getCharacterHandler() {
        fetch('https://xivapi.com/character/7051653')
        .then(response => response.json())
        .then(data => console.log(data));
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={getCharacterHandler}>Character</Button>
        </div>
    );
        
        
}

export default Character;