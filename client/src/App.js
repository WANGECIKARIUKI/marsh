import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Calendar from './components/Calendar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Signup' element = {<Signup/>} />
        <Route path = '/calendar' element = {<Calendar/>} />
      </Routes>



    </div>
  );
}

export default App;
