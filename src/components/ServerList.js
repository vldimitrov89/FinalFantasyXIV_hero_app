import Server from './Server';

const ServerList = function(props) {
    const titles = Object.keys(props.servers);
    const servers = Object.values(props.servers);

    return (
        <div>
              {titles.map((title, index) => (
                <Server
                    key={index}
                    title={title}
                    servers={servers[index]}
                />
            ))}
        </div>
    );
}

export default ServerList;