import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Calendar from './components/Calendar';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="bg-slate-600 w-full h-screen"></div>
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/Signup' element = {<Signup/>} />
        <Route path = '/calendar' element = {<Calendar/>} />
        <Route path = '/Login' element = {<Login/>} />
        <Route path = '/calendar' element = {<Calendar/>} />
      </Routes>



    </div>
  );
}

export default App;
