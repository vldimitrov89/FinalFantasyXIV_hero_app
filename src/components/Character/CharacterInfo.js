import React from 'react';
import Jobs from '../Jobs/Jobs';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Gear from '../Gear/Gear';

//Styles for remove padding from Container module
const useStyles = makeStyles(() => ({
    root: {
      paddingLeft: "0px",
      paddingRight: "0px"
    },
    imgStyle: {
        width: "90%",
        height: "90%"
    }
  }));

const CharacterInfo = function(props) {
    const classes = useStyles();
    
    return(
        <React.Fragment>
            <Container maxWidth="100%" className={classes.root} >
                <Box bgcolor="text.primary" color='white'>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Container maxWidth="sm">
                                <Box bgcolor="text.primary" color='white'>
                                    <Jobs classesInfo={props.characterData.ClassJobs} />
                                </Box>
                            </Container >
                        </Grid>
                        <Grid item xs={4}>
                            <Container>
                                <Box bgcolor="text.primary">
                                    <p><strong>{props.characterData.Name}</strong> - {props.characterData.ActiveClassJob.Name} - Level: {props.characterData.ActiveClassJob.Level}</p>
                                    <img className={classes.imgStyle} src={props.characterData.Portrait} alt={props.characterData.Name} />
                                </Box>
                            </Container >
                        </Grid>
                        <Grid item xs={4}>
                        <Container maxWidth="sm">
                            <Box ml="15px" bgcolor="text.primary" color='white'>
                                <Gear gearItems={props.characterData.GearSet} />
                            </Box>
                            </Container >
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default CharacterInfo;