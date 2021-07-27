import { useState } from 'react';
import ServerList from './ServerList';
import Button from '@material-ui/core/Button';

const Servers = function() {
    const [servers, setServers] = useState([]);
    const [buttonState, setButtonState] = useState(false);

    function getServersHandler() {
        if(buttonState === true) {
            setButtonState(false);
            return;
        }

        setButtonState(true);

        fetch('https://xivapi.com/servers/dc', {
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(data => setServers(data));
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={getServersHandler}>Servers</Button>
            {(buttonState === true) ? <ServerList servers={servers} /> : ''}
                
        </div>
    );
}

export default Servers;