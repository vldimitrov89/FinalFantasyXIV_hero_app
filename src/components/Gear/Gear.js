//Component for showing character's gear

import { Fragment, useState, useEffect } from 'react';

const Gear = function(props) {
    const [equippedGear, setEquippedGear] = useState({});

   

    // useEffect(() => {
    //     fetch("https://xivapi.com/item/" + props.gearItems.Gear.Body.ID)
    //     .then(response => response.json())
    //     .then(data => {
    //         setEquipedBody(data);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }, []);

    Promise.all([props.gearItems.Gear]).then((resolve) => {
        for (const property in resolve[0]) {
            //console.log(property);
            setTimeout(() => {
                fetch("https://xivapi.com/item/" + resolve[0][property].ID)
                .then(response => response.json())
                .then(data => {
                    //console.log(data);
                    setEquippedGear((prevState) => {
                        return {prevState, ...data};
                    });
                }).catch((error) => {
                    console.log(error);
                });
            }, 2000);
            
        }
    });
        
    console.log(equippedGear);    
    

    
    return (
        <Fragment>
            
        </Fragment>
    );
}

export default Gear;