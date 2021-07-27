import React from 'react';

const Cards = function() {

    fetch('https://xivapi.com/servers/dc', {
        headers: {
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
          }
    })
    .then(response => response.json())
    .then(data => console.log(data));


    return (
        <p>IT WORKS</p>
    );
}

export default Cards;