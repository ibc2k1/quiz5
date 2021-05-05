import logo from './logo.svg';
import './App.css';

import HelloCGU from './cgu_hello'
import MultiButton from './counterButton'


function App() {
  return (
  <div className="App">
    <div>
      { HelloCGU() }
    </div>
    <div>
      { MultiButton(10) }
    </div>
  </div>
  );
}

export default App;
