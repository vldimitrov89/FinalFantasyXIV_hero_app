import './App.css';
import Servers from './components/Servers';
import Character from './components/Character/Character';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Menu, AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';

//Styles for AppBar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>

            <Typography variant="h6" className={classes.title}>
            <p>Final Fantasy XIV app</p>
            </Typography>

          </Toolbar>
        </AppBar>
        <br />
        <Servers />
        <br />
        <Character />
    </div>
  );
}

export default App;
