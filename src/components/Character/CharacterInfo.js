import React from 'react';
import Jobs from '../Jobs/Jobs';

const CharacterInfo = function(props) {
    
    return(
        <div>
            <Jobs classesInfo={props.characterData.ClassJobs} />
        </div>
    );
}

export default CharacterInfo;