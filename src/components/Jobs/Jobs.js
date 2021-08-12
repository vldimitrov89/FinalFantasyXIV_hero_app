import { useState, useEffect, Fragment } from 'react';
import { Box, Slider, Grid, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Styles for center job imaged
const useStyles = makeStyles(() => ({
    centeredJobImg: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }
  }));

const Jobs = function(props) {
    const classes = useStyles();

    const [jobIcons, setJobIcons] = useState([]);

    useEffect(() => {
        fetch("https://xivapi.com/ClassJob")
        .then(response => response.json())
        .then(data => {
            setJobIcons(data.Results);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return(
        <Fragment>
            {props.classesInfo.map((job, index) => {
                if(job.Level === 0) {
                    return '';
                }
                return (
                  <Box mt="10px" height="100px" key={job.JobID}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} sm={3}>
                                <Box>
                                    {typeof jobIcons[index] !== 'undefined' && <Avatar className={classes.centeredJobImg} src={"https://xivapi.com/" + jobIcons.find(element => element.ID === job.JobID).Icon} alt={job.UnlockedState.Name} />}
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
                                        //marks={marks}
                                        valueLabelDisplay="on"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                  </Box>      
               );
            })}
        </Fragment>
    );
}

export default Jobs;