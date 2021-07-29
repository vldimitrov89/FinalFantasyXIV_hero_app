import React from 'react';

const Jobs = function(props) {
    console.log(props)
    return(
        <div>
            {props.classesInfo.map((job) => {
                return <p key={job.ClassID}>{job.UnlockedState.Name} - Level: {job.Level} </p>
            })}
        </div>
    );
}

export default Jobs;