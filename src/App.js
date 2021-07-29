import './App.css';
import Servers from './components/Servers';
import Character from './components/Character/Character';

function App() {
  return (
    <div className="App">
      <p>Final Fantasy XIV app</p>
      <Servers />
      <br />
      <Character />
    </div>
  );
}

export default App;
