import React from 'react';

const Server = function(props) {
    return (
        <React.Fragment>
            <p><strong>{props.title}</strong></p>
            <ul>
                {props.servers.map((server, index) => {
                    return <li key={index}>{server}</li>
                })}
            </ul>
        </React.Fragment>
    );
}

export default Server;