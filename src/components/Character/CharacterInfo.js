import React from 'react';
import Jobs from '../Jobs/Jobs';
import { Container, Grid, Box, Avatar } from '@material-ui/core';
import Gear from '../Gear/Gear';


const CharacterInfo = function(props) {
    console.log(props);
    return(
        <div>
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={6} sm={3}>
                        <Container maxWidth="sm">
                            <Box bgcolor="text.primary" color='white'>
                                <Jobs classesInfo={props.characterData.ClassJobs} />
                            </Box>
                        </Container >
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Box>
                            <img src={props.characterData.Portrait} alt={props.characterData.Name} />
                        </Box>
                        <Gear />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default CharacterInfo;