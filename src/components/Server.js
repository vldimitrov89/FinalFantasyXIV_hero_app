import React from 'react';

const Server = function(props) {
    return (
        <div>
            <p><strong>{props.title}</strong></p>
            <ul>
                {props.servers.map((server, index) => {
                    return <li key={index}>{server}</li>
                })}
            </ul>
        </div>
    );
}

export default Server;