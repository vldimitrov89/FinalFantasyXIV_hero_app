import './App.css';
import Servers from './components/Servers';
import Character from './components/Character/Character';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';

//Styles for AppBar
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(15),
  },
  title: {
    flexGrow: 1,
  },
  linkButtons: {
    marginRight: theme.spacing(2),
    color: '#ffff',
    fontSize: '1.25rem',
    fontWeight: '500',
    lineHeight: '1.6',
    letterSpacing: '0.0075em',
    textDecoration: 'none',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Router>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              <Link className={classes.linkButtons} color="inherit" to="/">Final Fantasy XIV app</Link>
            </Typography>

              <Link className={classes.linkButtons} color="inherit" to="/">Home</Link>
              <Link className={classes.linkButtons} color="inherit" to="/about">About</Link>
            
          </Toolbar>
        </AppBar>
        <br />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Servers />
            <br />
            <br />
            <Character />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
