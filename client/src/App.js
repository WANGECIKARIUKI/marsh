import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Button' element = {<Button/>} />
      </Routes>



    </div>
  );
}

export default App;
