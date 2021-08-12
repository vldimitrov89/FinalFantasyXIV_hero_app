import { useState, useEffect, Fragment } from 'react';
import ServerList from './ServerList';
import {Button, Backdrop, CircularProgress} from '@material-ui/core';

const Servers = function() {
    const [servers, setServers] = useState([]);
    const [buttonState, setButtonState] = useState(false);
    const [ isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('https://xivapi.com/servers/dc', {
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          }
        })
        .then(response => response.json())
        .then(data => {
            setServers(data);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    function getServersHandler() {
        if(buttonState === true) {
            setButtonState(false);
            return;
        }

        setButtonState(true);
        setIsLoading(true);
    }

    return (
        <Fragment>
            <Button variant="contained" color="primary" onClick={getServersHandler}>Servers</Button>
            {(buttonState === true) ? <ServerList servers={servers} /> : ''}
            <Backdrop open={isLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Fragment>
    );
}

export default Servers;