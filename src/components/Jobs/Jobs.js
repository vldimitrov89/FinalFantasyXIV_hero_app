import { useState, useEffect } from 'react';
import { Box, Slider, Grid, Avatar } from '@material-ui/core';

const Jobs = function(props) {
    const [jobIcons, setJobIcons] = useState([]);

    useEffect(() => {
        fetch("https://xivapi.com/ClassJob")
        .then(response => response.json())
        .then(data => {
            setJobIcons(data.Results);
        });
    }, []);
    
    return(
        <div>
            {props.classesInfo.map((job, index) => {
                return (
                  <Box mt="10px" key={job.JobID}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Box>
                                    {typeof jobIcons[index] !== 'undefined' && <Avatar src={"https://xivapi.com/" + jobIcons.find(element => element.ID === job.JobID).Icon} alt={job.UnlockedState.Name} />}
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                {job.UnlockedState.Name}
                            </Grid>
                        </Grid>
                        
                        
                        <br />
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                    <Box>
                                        Level:
                                    </Box>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <Box>
                                    <Slider 
                                        aria-labelledby="discrete-slider-small-steps"
                                        step={1}
                                        min={0}
                                        max={80}
                                        value={job.Level} 
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                            
                        
                        
                  </Box>
                            
                         
               );
            })}
        </div>
    );
}

export default Jobs;