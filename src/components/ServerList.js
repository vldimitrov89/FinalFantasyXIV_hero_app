import React from 'react';
import Server from './Server';

const ServerList = function(props) {
    const titles = Object.keys(props.servers);
    const servers = Object.values(props.servers);

    return (
        <React.Fragment>
              {titles.map((title, index) => (
                <Server
                    key={index}
                    title={title}
                    servers={servers[index]}
                />
            ))}
        </React.Fragment>
    );
}

export default ServerList;