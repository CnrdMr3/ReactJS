import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo1" alt="logo" />
        <img src={logo} className="App-logo2" alt="logo" />
        <img src={logo} className="App-logo3" alt="logo" />
        <p>
          'ReactJS-ivi-ty'
        </p>
        <a
          className="App-link"
          href="https://github.com/CnrdMr3/ReactJS"
          target="_blank"
          rel="noopener noreferrer"
        >
          CnrdMr3 - GitHub.com
        </a>
      </header>
    </div>
  );
}

export default App;
