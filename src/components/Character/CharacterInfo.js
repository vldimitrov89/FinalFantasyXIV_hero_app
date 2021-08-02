import React from 'react';
import Jobs from '../Jobs/Jobs';
import { Container, Grid, Box } from '@material-ui/core';


const CharacterInfo = function(props) {
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} sm={3}>
                    <Container maxWidth="sm">
                        <Box bgcolor="text.primary" color='white'>
                            <Jobs classesInfo={props.characterData.ClassJobs} />
                        </Box>
                    </Container >
                </Grid>
                <Grid item xs={6} sm={3}>
                
                </Grid>
            </Grid>
            
        </div>
    );
}

export default CharacterInfo;