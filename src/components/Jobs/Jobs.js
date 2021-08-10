import { useState, useEffect } from 'react';
import { Box, Slider, Grid, Avatar } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

//Styles for remove padding from Container module
const theme = createTheme({
    overrides: {
      MuiSlider: {
        markLabel: {
          color: 'white',
        },
      },
    },
});

const Jobs = function(props) {

    const [jobIcons, setJobIcons] = useState([]);

    useEffect(() => {
        fetch("https://xivapi.com/ClassJob")
        .then(response => response.json())
        .then(data => {
            setJobIcons(data.Results);
        });
    }, []);

    //labels for the jobs progress sliders
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 20,
            label: '20',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 40,
            label: '40',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 70,
            label: '70',
        },
        {
            value: 80,
            label: '80',
        },
    ];
    
    return(
        <ThemeProvider theme={theme}>
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
                                        marks={marks}
                                        valueLabelDisplay="on"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                  </Box>      
               );
            })}
        </ThemeProvider>
    );
}

export default Jobs;